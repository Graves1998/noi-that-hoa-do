import { Link } from 'react-router-dom'
import styles from './PromoBanner.module.css'

export default function PromoBanner({
  image,
  imageLeft,
  imageRight,
  eyebrow,
  title,
  description,
  buttonText = 'Mua ngay',
  buttonTo = '/shop',
  align = 'right',
}) {
  if (imageLeft && imageRight) {
    return (
      <section className={styles.banner3col}>
        <div className={`promo-col-left ${styles.colSide}`}>
          <img src={imageLeft} alt="" className={styles.sideImg} />
        </div>
        <div className={`promo-content ${styles.colCenter}`}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.desc}>{description}</p>}
          <Link to={buttonTo} className="btn btn--primary">{buttonText}</Link>
        </div>
        <div className={`promo-col-right ${styles.colSide}`}>
          <img src={imageRight} alt="" className={styles.sideImg} />
        </div>
      </section>
    )
  }

  return (
    <section className={styles.banner}>
      <img src={image} alt="" className={styles.bg} />
      <div className={`${styles.overlay} ${align === 'left' ? styles.left : styles.right}`}>
        <div className={`promo-content ${styles.content}`}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.desc}>{description}</p>}
          <Link to={buttonTo} className="btn btn--primary">{buttonText}</Link>
        </div>
      </div>
    </section>
  )
}
