import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductCard from '@components/ui/ProductCard/ProductCard'
import FeaturesBar from '@components/ui/FeaturesBar/FeaturesBar'
import MarqueeBar from '@components/ui/MarqueeBar/MarqueeBar'
import { products } from '@data/products'
import { navCategories } from '@data/categories'
import styles from './Home.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef   = useRef(null)
  const featRef   = useRef(null)
  const cardsRef  = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: .8, delay: .1 })
      gsap.from('.hero-h1', { opacity: 0, y: 32, duration: .9, delay: .25, ease: 'power3.out' })
      gsap.from('.hero-sub', { opacity: 0, y: 20, duration: .8, delay: .45 })
      gsap.from('.hero-cta', { opacity: 0, y: 16, duration: .7, delay: .6 })
      gsap.from('.hero-scroll-bar', { scaleX: 0, duration: 1.2, delay: .9, transformOrigin: 'left', ease: 'power2.inOut' })

      // Category cards
      gsap.from('.cat-card', {
        opacity: 0, y: 40, stagger: .1, duration: .7, ease: 'power2.out',
        scrollTrigger: { trigger: '.cat-section', start: 'top 80%' }
      })

      // Product cards
      gsap.from('.prod-card', {
        opacity: 0, y: 36, stagger: .08, duration: .65, ease: 'power2.out',
        scrollTrigger: { trigger: '.prod-grid', start: 'top 82%' }
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const featured = products.slice(0, 4)

  return (
    <div ref={heroRef}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className="eyebrow hero-eyebrow">Bộ sưu tập 2026</span>
          <h1 className={`${styles.heroH1} hero-h1`}>
            Không gian sống<br />
            <em>tinh tế & bền vững</em>
          </h1>
          <p className={`${styles.heroSub} hero-sub`}>
            Nội thất cao cấp — thiết kế Việt Nam, chất lượng quốc tế.
            Mỗi sản phẩm là một tuyên ngôn về phong cách sống.
          </p>
          <div className={`${styles.heroCta} hero-cta`}>
            <Link to="/shop" className="btn btn--primary">Khám phá ngay</Link>
            <Link to="/shop" className="btn btn--ghost">Xem bộ sưu tập</Link>
          </div>
        </div>
        <div className={`scroll-bar hero-scroll-bar`} />
      </section>

      {/* ── Marquee ── */}
      <MarqueeBar dark={false} />

      {/* ── Category Nav ── */}
      <section className={`cat-section ${styles.catSection}`}>
        <div className={styles.sectionHeader}>
          <span className="eyebrow">Danh mục</span>
          <h2>Tìm phong cách của bạn</h2>
        </div>
        <div className={styles.catGrid}>
          {navCategories.map((cat) => (
            <Link key={cat.id} to={`/shop?cat=${cat.id}`} className={`cat-card ${styles.catCard}`}>
              <div className={styles.catImg} style={{ backgroundImage: `url(${cat.image})` }} />
              <div className={styles.catLabel}>{cat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionHeader}>
          <span className="eyebrow">Nổi bật</span>
          <h2>Được yêu thích nhất</h2>
          <Link to="/shop" className={styles.seeAll}>Xem tất cả →</Link>
        </div>
        <div className={`prod-grid ${styles.prodGrid}`}>
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ── Features Bar ── */}
      <FeaturesBar />

      {/* ── Brand Story ── */}
      <section className={`${styles.storySection}`}>
        <div className={styles.storyInner}>
          <div className={styles.storyText}>
            <span className="eyebrow">Câu chuyện của chúng tôi</span>
            <h2>Nghề thủ công gặp thiết kế hiện đại</h2>
            <p>
              Hoa Đô được thành lập với niềm tin rằng không gian sống đẹp là quyền của tất cả mọi người.
              Chúng tôi kết hợp nghề thủ công truyền thống Việt Nam với thiết kế đương đại để tạo ra
              những sản phẩm vừa đẹp, vừa bền, vừa có hồn.
            </p>
            <p>
              Mỗi sản phẩm đều được kiểm tra kỹ lưỡng về chất lượng và tuổi thọ trước khi đến tay
              khách hàng — vì chúng tôi tin rằng một chiếc ghế tốt có thể đồng hành cùng bạn suốt nhiều thế hệ.
            </p>
            <Link to="/shop" className="btn btn--primary" style={{ marginTop: 'var(--sp-6)', display: 'inline-block' }}>
              Khám phá sản phẩm
            </Link>
          </div>
          <div className={styles.storyImg}>
            <img
              src="https://framerusercontent.com/images/2hr7LQj1OIdhEKjXv75QScK1Jto.png"
              alt="Xưởng sản xuất Hoa Đô"
            />
          </div>
        </div>
      </section>

      {/* ── Marquee dark ── */}
      <MarqueeBar dark />
    </div>
  )
}
