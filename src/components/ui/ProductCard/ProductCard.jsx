import { Link } from 'react-router-dom'
import { formatPrice } from '@data/products'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  const detailUrl = `/product/${product.slug}`

  return (
    <article className={`prod-card ${styles.card}`}>
      <Link to={detailUrl} className={styles.imgWrap}>
        {product.badge && (
          <span className={`${styles.badge} ${product.badge === 'new' ? styles.badgeNew : styles.badgeSale}`}>
            {product.badge === 'new' ? 'Mới' : 'Giảm giá'}
          </span>
        )}
        <img
          className={styles.imgBg}
          src={product.images?.[0]}
          alt={product.name}
          loading="lazy"
        />

        {product.swatches?.length > 0 && (
          <div className={styles.swatchRow}>
            {product.swatches.slice(0, 4).map((s) => (
              <span
                key={s.id}
                className={styles.swatchDot}
                style={{ background: s.color }}
                title={s.label}
              />
            ))}
          </div>
        )}

        <span className={styles.addBar}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Xem chi tiết
        </span>
      </Link>

      <div className="card-body">
        {product.collection && (
          <span className="eyebrow">{product.collection}</span>
        )}
        <h3 className="card-name">
          <Link to={detailUrl}>{product.name}</Link>
        </h3>
        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </article>
  )
}
