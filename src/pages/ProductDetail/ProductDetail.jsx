import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useCart } from '@context/CartContext'
import { useToast } from '@context/ToastContext'
import Breadcrumb from '@components/ui/Breadcrumb/Breadcrumb'
import FeaturesBar from '@components/ui/FeaturesBar/FeaturesBar'
import ProductCard from '@components/ui/ProductCard/ProductCard'
import { getProductBySlug, getRelatedProducts, formatPrice } from '@data/products'
import styles from './ProductDetail.module.css'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const related = product ? getRelatedProducts(product) : []

  const { addItem } = useCart()
  const { showToast } = useToast()

  const [activeImg, setActiveImg] = useState(0)
  const [activeSwatch, setActiveSwatch] = useState(0)
  const [qty, setQty] = useState(1)

  const imgRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    setActiveImg(0)
    setActiveSwatch(0)
    setQty(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  useEffect(() => {
    if (!product) return
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, { opacity: 0, x: -30, duration: .7, ease: 'power3.out', delay: .1 })
      gsap.from(infoRef.current, { opacity: 0, x: 30, duration: .7, ease: 'power3.out', delay: .2 })
    })
    return () => ctx.revert()
  }, [product])

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Không tìm thấy sản phẩm</h2>
        <Link to="/shop" className="btn btn--primary">Quay lại cửa hàng</Link>
      </div>
    )
  }

  const addToCart = () => {
    for (let i = 0; i < qty; i++) addItem(product)
    showToast(`Đã thêm "${product.name}" vào giỏ hàng`)
  }

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumbWrap}>
        <div className={styles.inner}>
          <Breadcrumb items={[
            { label: 'Trang chủ', href: '/' },
            { label: 'Cửa hàng', href: '/shop' },
            { label: product.name },
          ]} />
        </div>
      </div>

      {/* Main product section */}
      <div className={`${styles.inner} ${styles.product}`}>
        {/* Images */}
        <div className={styles.gallery} ref={imgRef}>
          <div className={styles.mainImg}>
            {product.badge && (
              <span className={`${styles.badge} ${product.badge === 'new' ? styles.badgeNew : styles.badgeSale}`}>
                {product.badge === 'new' ? 'Mới' : 'Sale'}
              </span>
            )}
            <img
              src={product.images[activeImg]}
              alt={product.name}
              className={styles.mainImgEl}
            />
          </div>
          {product.images.length > 1 && (
            <div className={styles.thumbs}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className={styles.info} ref={infoRef}>
          {product.collection && <span className="eyebrow">{product.collection}</span>}
          <h1 className={styles.name}>{product.name}</h1>

          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <>
                <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
                <span className={styles.discount}>
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              </>
            )}
          </div>

          <p className={styles.desc}>{product.description}</p>

          {/* Swatches */}
          {product.swatches && product.swatches.length > 0 && (
            <div className={styles.swatchGroup}>
              <p className={styles.optLabel}>
                Màu sắc: <strong>{product.swatches[activeSwatch].label}</strong>
              </p>
              <div className={styles.swatches}>
                {product.swatches.map((sw, i) => (
                  <button
                    key={sw.id}
                    className={`${styles.swatch} ${i === activeSwatch ? styles.swatchActive : ''}`}
                    style={{ background: sw.color }}
                    title={sw.label}
                    onClick={() => setActiveSwatch(i)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Qty + Cart */}
          <div className={styles.actions}>
            <div className={styles.qtyControl}>
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <button className={`${styles.btnCart} btn btn--primary`} onClick={addToCart}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Thêm vào giỏ
            </button>
          </div>

          {/* Specs */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className={styles.specs}>
              <h3>Thông số kỹ thuật</h3>
              <table>
                <tbody>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Features */}
      <FeaturesBar />

      {/* Related products */}
      {related.length > 0 && (
        <section className={styles.related}>
          <div className={styles.inner}>
            <span className="eyebrow">Có thể bạn cũng thích</span>
            <h2>Sản phẩm liên quan</h2>
            <div className={styles.relatedGrid}>
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
