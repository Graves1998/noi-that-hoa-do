import { useState, useEffect, useRef } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Minh Anh',
    initial: 'MA',
    text: 'Không gian làm việc của tôi hoàn toàn thay đổi nhờ bàn và kệ sách từ Hoa Đô. Chất lượng gỗ tuyệt vời, thiết kế tinh tế.',
  },
  {
    name: 'Đức Huy',
    initial: 'DH',
    text: 'Sofa Hoa Đô vừa đẹp vừa bền. Đã dùng hơn 2 năm mà vẫn như mới. Dịch vụ lắp đặt chuyên nghiệp, đúng giờ.',
  },
  {
    name: 'Thu Hà',
    initial: 'TH',
    text: 'Mình rất thích phong cách tối giản nhưng ấm áp của Hoa Đô. Bộ phòng ngủ mua ở đây khiến mình muốn về nhà sớm hơn mỗi ngày.',
  },
  {
    name: 'Quang Vinh',
    initial: 'QV',
    text: 'Nội thất phòng ăn từ Hoa Đô biến bữa cơm gia đình thành khoảnh khắc đáng nhớ. Bàn gỗ óc chó đẹp không tưởng.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  const startAutoRotate = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    if (!paused) startAutoRotate()
    return () => clearInterval(intervalRef.current)
  }, [paused])

  const goTo = (i) => {
    setActive(i)
    startAutoRotate()
  }

  const goPrev = () => goTo((active - 1 + testimonials.length) % testimonials.length)
  const goNext = () => goTo((active + 1) % testimonials.length)

  const t = testimonials[active]

  return (
    <div
      className={styles.section}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={styles.inner}>
        <div className={styles.layout} aria-live="polite" aria-atomic="true">
          <div className={styles.avatarCol}>
            <div className={styles.avatarInitial}>{t.initial}</div>
          </div>
          <div className={styles.quoteCol}>
            <svg className={styles.quoteIcon} viewBox="0 0 32 32" fill="none">
              <path d="M6 18h6l-4 8M18 18h6l-4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 18V10a4 4 0 0 1 4-4h2M18 18V10a4 4 0 0 1 4-4h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className={styles.text}>{t.text}</p>
            <span className={styles.name}>{t.name}</span>
          </div>
        </div>

        <div className={styles.nav}>
          <button className={styles.arrow} onClick={goPrev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button className={styles.arrow} onClick={goNext} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
