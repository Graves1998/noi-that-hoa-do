import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { blogPosts, blogCategories } from '@data/blog'
import styles from './Blog.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Blog() {
  const [filter, setFilter] = useState('all')
  const pageRef = useRef(null)
  const gridRef = useRef(null)

  const filtered = filter === 'all'
    ? blogPosts
    : blogPosts.filter((p) => p.category === filter)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to('.blog-hero-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: '.blog-hero', start: 'top top', end: 'bottom top', scrub: true }
      })

      // Hero text entrance
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      heroTl
        .from('.blog-hero-title', { opacity: 0, y: 60, duration: 0.9, delay: 0.2 })
        .from('.blog-hero-sub', { opacity: 0, y: 40, duration: 0.7 }, 0.5)

      // Filter pills stagger
      gsap.from('.blog-pill', {
        opacity: 0, y: 20, stagger: 0.06, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: '.blog-filter', start: 'top 90%' }
      })

      // Blog cards stagger
      gsap.from('.blog-card', {
        opacity: 0, y: 60, scale: 0.95, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.blog-grid', start: 'top 82%' }
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  // Re-animate cards on filter change
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll(`.${styles.card}`)
    gsap.fromTo(cards,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.06, duration: 0.45, ease: 'power3.out' }
    )
  }, [filter])

  return (
    <div ref={pageRef}>
      {/* ── Hero ── */}
      <section className={`blog-hero ${styles.hero}`}>
        <img
          src="https://framerusercontent.com/images/fNi9Nej5TxioO4qZtdDen84JA.png"
          alt=""
          className={`blog-hero-bg ${styles.heroBg}`}
        />
        <div className={styles.heroOverlay}>
          <h1 className={`blog-hero-title ${styles.heroTitle}`}>Bài viết</h1>
          <p className={`blog-hero-sub ${styles.heroSub}`}>
            Khám phá những câu chuyện truyền cảm hứng về<br />
            nội thất, thiết kế và phong cách sống
          </p>
        </div>
      </section>

      {/* ── Filter ── */}
      <section className={`blog-filter ${styles.filterSection}`}>
        <div className={styles.filterInner}>
          <span className={styles.filterLabel}>CHỦ ĐỀ:</span>
          <div className={styles.filterPills}>
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                className={`blog-pill ${styles.pill} ${filter === cat.id ? styles.pillActive : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className={styles.gridSection}>
        <div className={`blog-grid ${styles.grid}`} ref={gridRef}>
          {filtered.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className={`blog-card ${styles.card}`}>
              <img src={post.image} alt={post.title} className={styles.cardImg} />
              <div className={styles.cardOverlay}>
                <span className={styles.cardCat}>{post.categoryLabel}</span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
