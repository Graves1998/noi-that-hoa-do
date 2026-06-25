import { useEffect, useRef, useState } from 'react'
import styles from './StatsCounter.module.css'

const stats = [
  { value: 1200, suffix: '+', label: 'Dự án hoàn thành' },
  { value: 15, suffix: 'k+', label: 'Khách hàng hài lòng' },
  { value: 98, suffix: '%', label: 'Mức độ hài lòng' },
]

function AnimatedNumber({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const start = performance.now()
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className={styles.number}>
      {count.toLocaleString('vi-VN')}{suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {stats.map((s) => (
          <div key={s.label} className={styles.item}>
            <AnimatedNumber target={s.value} suffix={s.suffix} />
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
