import { useState, useMemo, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductGrid from '@components/ui/ProductGrid/ProductGrid'
import ShopBanner from '@components/ui/ShopBanner/ShopBanner'
import ShopSidebar from '@components/ui/ShopSidebar/ShopSidebar'
import FeaturesBar from '@components/ui/FeaturesBar/FeaturesBar'
import { products } from '@data/products'
import { categories, collections } from '@data/categories'
import styles from './Shop.module.css'

gsap.registerPlugin(ScrollTrigger)

const SORT_OPTIONS = [
  { value: 'default',    label: 'Mặc định' },
  { value: 'price-asc',  label: 'Giá thấp đến cao' },
  { value: 'price-desc', label: 'Giá cao đến thấp' },
  { value: 'name-asc',   label: 'Tên A–Z' },
]

const AVAILABILITY_OPTIONS = [
  { value: 'in-stock', label: 'Còn hàng' },
  { value: 'pre-order', label: 'Đặt trước' },
]

const PAGE_SIZE = 6

export default function Shop() {
  const pageRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const catParam = searchParams.get('cat') || 'all'

  const [activeCategory, setActiveCategory] = useState(catParam)
  const [activeCollection, setActiveCollection] = useState('all')
  const [activeAvailability, setActiveAvailability] = useState([])
  const [sortBy, setSortBy] = useState('default')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  // Sync URL param → state
  useEffect(() => {
    setActiveCategory(catParam)
  }, [catParam])

  const setCategory = (id) => {
    setActiveCategory(id)
    setVisibleCount(PAGE_SIZE)
    if (id === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ cat: id })
    }
  }

  const setCollection = (id) => {
    setActiveCollection(id)
    setVisibleCount(PAGE_SIZE)
  }

  const toggleAvailability = (value) => {
    setActiveAvailability((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
    setVisibleCount(PAGE_SIZE)
  }

  const resetFilters = () => {
    setActiveCategory('all')
    setActiveCollection('all')
    setActiveAvailability([])
    setSortBy('default')
    setVisibleCount(PAGE_SIZE)
    setSearchParams({})
  }

  const hasActiveFilters =
    activeCategory !== 'all' || activeCollection !== 'all' || activeAvailability.length > 0

  // GSAP scroll animations
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      // Toolbar entrance
      gsap.from('.shop-toolbar', {
        opacity: 0, y: 30, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.shop-toolbar', start: 'top 90%' }
      })

      // Category chips stagger
      gsap.from('.shop-chip', {
        opacity: 0, scale: 0.85, stagger: 0.05, duration: 0.4, ease: 'power3.out',
        scrollTrigger: { trigger: '.shop-toolbar', start: 'top 88%' }
      })

      // Product cards stagger
      gsap.from('.shop-grid [class*="card"]', {
        opacity: 0, y: 50, scale: 0.95, stagger: 0.08, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: '.shop-grid', start: 'top 82%' }
      })

      // Promo section
      gsap.from('.shop-promo', {
        opacity: 0, y: 60, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.shop-promo', start: 'top 78%' }
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const filtered = useMemo(() => {
    let list = [...products]
    if (activeCategory !== 'all') list = list.filter((p) => p.category === activeCategory)
    if (activeCollection !== 'all') list = list.filter((p) => p.collection === activeCollection)
    if (activeAvailability.length > 0) list = list.filter((p) => activeAvailability.includes(p.availability))
    if (sortBy === 'price-asc')  list.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sortBy === 'name-asc')   list.sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [activeCategory, activeCollection, activeAvailability, sortBy])

  const visible = filtered.slice(0, visibleCount)
  const canLoadMore = visibleCount < filtered.length

  return (
    <div className={styles.shopPage} ref={pageRef}>
      {/* Banner */}
      <ShopBanner
        title="Cửa hàng"
        subtitle="Nội thất tinh tế, vượt thời gian cho không gian sống hiện đại"
        breadcrumb={[{ label: 'Trang chủ', href: '/' }, { label: 'Cửa hàng' }]}
      />

      <div className={styles.shopLayout}>
        {/* Sidebar */}
        <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
          <ShopSidebar
            categories={categories}
            collections={collections}
            activeCategory={activeCategory}
            setCategory={setCategory}
            activeCollection={activeCollection}
            setCollection={setCollection}
            activeAvailability={activeAvailability}
            toggleAvailability={toggleAvailability}
            availabilityOptions={AVAILABILITY_OPTIONS}
            hasActiveFilters={hasActiveFilters}
            resetFilters={resetFilters}
            onClose={() => setSidebarOpen(false)}
          />
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className={styles.overlay}
            onClick={() => setSidebarOpen(false)}
            onKeyDown={(e) => { if (e.key === 'Escape' || e.key === 'Enter') setSidebarOpen(false) }}
            role="button"
            tabIndex={0}
            aria-label="Đóng bộ lọc"
          />
        )}

        {/* Main content */}
        <main className={styles.main}>
          {/* Toolbar */}
          <div className={`shop-toolbar ${styles.toolbar}`}>
            <button className={styles.filterToggle} onClick={() => setSidebarOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="8" y1="12" x2="20" y2="12" />
                <line x1="12" y1="18" x2="20" y2="18" />
              </svg>
              Lọc
            </button>
            <div className={styles.catChips}>
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat.id}
                  className={`shop-chip ${styles.chip} ${activeCategory === cat.id ? styles.chipActive : ''}`}
                  onClick={() => setCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <span className={styles.resultCount}>{filtered.length} sản phẩm</span>
            <label htmlFor="shop-sort" className="sr-only">Sắp xếp theo</label>
            <select
              id="shop-sort"
              className={styles.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <>
              <div className="shop-grid"><ProductGrid products={visible} /></div>
              {canLoadMore && (
                <div className={styles.loadMoreWrap}>
                  <button className="btn-loadmore" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
                    Xem thêm
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className={styles.empty}>
              <p>Không tìm thấy sản phẩm nào.</p>
              <button className="btn btn--ghost" onClick={resetFilters}>
                Xoá bộ lọc
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Promo Section */}
      <section className={`shop-promo ${styles.promo}`}>
        <div className={styles.promoCard}>
          <div className={styles.promoContent}>
            <div>
              <h2>Phù hợp với mọi không gian</h2>
              <p>
                Từ căn hộ thành phố nhỏ gọn đến văn phòng rộng rãi, nội thất Hoa Đô
                thích nghi hoàn hảo với mọi môi trường sống.
              </p>
            </div>
            <Link to="/shop?cat=office" className={styles.promoLink}>
              Khám phá bộ sưu tập
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className={styles.promoImgWrap}>
            <img
              src="https://framerusercontent.com/images/ycBk5SjDtey2kS3EWXVJA7OPWQc.png"
              alt="Phòng ăn nội thất Hoa Đô"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <FeaturesBar />
    </div>
  )
}
