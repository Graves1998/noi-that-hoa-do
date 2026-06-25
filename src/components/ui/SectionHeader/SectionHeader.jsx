import { Link } from 'react-router-dom'
import styles from './SectionHeader.module.css'

export default function SectionHeader({ eyebrow, title, linkText, linkTo, center = false, light = false }) {
  return (
    <div className={`${styles.header} ${center ? styles.center : ''} ${light ? styles.light : ''}`}>
      {eyebrow && <span className={`eyebrow ${light ? styles.eyebrowLight : ''}`}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {linkText && linkTo && (
        <Link to={linkTo} className={styles.link}>{linkText} &rarr;</Link>
      )}
    </div>
  )
}
