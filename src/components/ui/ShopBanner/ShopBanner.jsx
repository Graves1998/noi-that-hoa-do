import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Breadcrumb from '@components/ui/Breadcrumb/Breadcrumb'
import styles from './ShopBanner.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function ShopBanner({
  title = 'Cửa hàng',
  subtitle = 'Nội thất tinh tế, vượt thời gian cho không gian sống hiện đại',
  bgImage = 'https://framerusercontent.com/images/sxicaLM2H1i4TiDmfiey9JSDFbQ.png',
  mainImage = 'https://framerusercontent.com/images/2hr7LQj1OIdhEKjXv75QScK1Jto.png',
  secondaryImage = 'https://framerusercontent.com/images/fNi9Nej5TxioO4qZtdDen84JA.png',
  breadcrumb,
}) {
  const rootRef = useRef(null)
  const bgRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Background: subtle scale-in (Ken Burns start)
      tl.from(bgRef.current, { scale: 1.12, duration: 1.2, ease: 'power2.out' }, 0)

      // Left column — breadcrumb, title, subtitle (fade + slide up, staggered)
      tl.from(`.${styles.breadcrumb}`, { opacity: 0, y: 20, duration: 0.7 }, 0.1)
        .from(`.${styles.title}`,      { opacity: 0, y: 36, duration: 0.9 }, 0.2)
        .from(`.${styles.subtitle}`,   { opacity: 0, y: 24, duration: 0.8 }, 0.4)

      // Right column — image collage (fade + slide up, staggered after text)
      tl.from(`.${styles.imgMain}`,      { opacity: 0, y: 50, duration: 0.9 }, 0.3)
        .from(`.${styles.imgSecondary}`, { opacity: 0, y: 40, scale: .94, duration: 0.8 }, 0.45)

      // Parallax on scroll for background image
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.banner} ref={rootRef}>
      <div className={styles.bg} ref={bgRef} style={{ backgroundImage: `url(${bgImage})` }} />
      <div className={styles.overlay} />
      <div className={styles.fade} />

      <div className={styles.inner}>
        <div className={styles.col}>
          {breadcrumb && (
            <div className={styles.breadcrumb}>
              <Breadcrumb items={breadcrumb} />
            </div>
          )}
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.col}>
          <div className={styles.imageWrap}>
            <div className={styles.imgMain} style={{ backgroundImage: `url(${mainImage})` }} />
            <div className={styles.imgSecondary} style={{ backgroundImage: `url(${secondaryImage})` }} />
          </div>
        </div>
      </div>
    </section>
  )
}
