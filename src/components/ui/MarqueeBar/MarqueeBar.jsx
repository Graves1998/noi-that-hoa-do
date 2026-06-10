import styles from './MarqueeBar.module.css'

const items = [
  'Thiết kế cao cấp',
  'Chế tác thủ công',
  'Giao hàng toàn quốc',
  'Bảo hành 5 năm',
  'Đổi trả 30 ngày',
  'Tư vấn miễn phí',
  'Vật liệu bền vững',
  'Sản xuất tại Việt Nam',
]

export default function MarqueeBar({ dark = true }) {
  return (
    <div className={`marquee-bar ${dark ? '' : 'light'}`}>
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            <span className={styles.dot}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
