import { Link } from 'react-router-dom'
import styles from './Breadcrumb.module.css'

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumb">
      {items.map((item, i) => (
        <span key={i} className={styles.item}>
          {i > 0 && <span className={styles.sep}>›</span>}
          {item.href && i < items.length - 1 ? (
            <Link to={item.href} className={styles.link}>{item.label}</Link>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
