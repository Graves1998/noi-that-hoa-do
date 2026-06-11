import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import Breadcrumb from '@components/ui/Breadcrumb/Breadcrumb'
import Accordion from '@components/ui/Accordion/Accordion'
import ProductCard from '@components/ui/ProductCard/ProductCard'
import { getProductBySlug, getRelatedProducts, formatPrice, getCareInstructions, DELIVERY_INFO } from '@data/products'
import accStyles from '@components/ui/Accordion/Accordion.module.css'
import styles from './ProductDetail.module.css'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const related = product ? getRelatedProducts(product) : []

  const [activeImg, setActiveImg] = useState(0)
  const [activeSwatch, setActiveSwatch] = useState(0)

  const imgRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    setActiveImg(0)
    setActiveSwatch(0)
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

  const accordionItems = [
    {
      title: 'Mô tả sản phẩm',
      content: <p>{product.description}</p>,
    },
    ...(product.specs && Object.keys(product.specs).length > 0
      ? [{
          title: 'Thông số kỹ thuật',
          content: (
            <table className={accStyles.specsTable}>
              <tbody>
                {Object.entries(product.specs).map(([key, val]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ),
        }]
      : []),
    ...(product.specs && product.specs['Kích thước']
      ? [{
          title: 'Kích thước & Trọng lượng',
          content: (
            <p>
              Kích thước: {product.specs['Kích thước']}. Thông số có thể chênh lệch nhẹ
              (1–2cm) tùy theo lô sản xuất. Vui lòng liên hệ với chúng tôi nếu bạn cần
              thông tin chi tiết hơn trước khi đặt hàng.
            </p>
          ),
        }]
      : []),
    {
      title: 'Hướng dẫn bảo quản',
      content: <p>{getCareInstructions(product)}</p>,
    },
    {
      title: 'Vận chuyển & Đổi trả',
      content: <p>{DELIVERY_INFO}</p>,
    },
  ]

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

          <div className={styles.rating} aria-label="Đánh giá 5 sao">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className={styles.star} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.5l2.95 6.46 7.05.66-5.32 4.74 1.6 6.94-6.28-3.7-6.28 3.7 1.6-6.94L2 9.62l7.05-.66z" />
              </svg>
            ))}
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
                    type="button"
                    className={`${styles.swatchRing} ${i === activeSwatch ? styles.swatchRingActive : ''}`}
                    title={sw.label}
                    aria-label={sw.label}
                    aria-pressed={i === activeSwatch}
                    onClick={() => setActiveSwatch(i)}
                  >
                    <span className={styles.swatchDot} style={{ background: sw.color }} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Product details accordion */}
          <div className={styles.detailsAccordion}>
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>

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
