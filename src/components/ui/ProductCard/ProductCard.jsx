import { Link } from 'react-router-dom'
import { useCart } from '@context/CartContext'
import { useToast } from '@context/ToastContext'
import { formatPrice } from '@data/products'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const { showToast } = useToast()

  const addToCart = (e) => {
    e.preventDefault()
    addItem(product)
    showToast(`Đã thêm "${product.name}" vào giỏ hàng`)
  }

  return (
    <article className={`prod-card ${styles.card}`}>
      <Link to={`/product/${product.slug}`} className={styles.imgWrap}>
        {product.badge && (
          <span className={`${styles.badge} ${product.badge === 'new' ? styles.badgeNew : styles.badgeSale}`}>
            {product.badge === 'new' ? 'Mới' : 'Giảm giá'}
          </span>
        )}
        <div
          className={styles.imgBg}
          style={product.images?.[0] ? { backgroundImage: `url(${product.images[0]})` } : undefined}
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

        <button className={styles.addBar} onClick={addToCart}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          Thêm vào giỏ
        </button>
      </Link>

      <div className="card-body">
        {product.collection && (
          <span className="eyebrow">{product.collection}</span>
        )}
        <h3 className="card-name">
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
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
