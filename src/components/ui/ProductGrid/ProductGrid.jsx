import ProductCard from '@components/ui/ProductCard/ProductCard'
import styles from './ProductGrid.module.css'

export default function ProductGrid({ products = [] }) {
  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
