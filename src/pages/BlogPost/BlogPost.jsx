import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { blogPosts } from '@data/blog'
import styles from './BlogPost.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  const pageRef = useRef(null)

  useEffect(() => {
    if (!post) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    window.scrollTo({ top: 0 })

    const ctx = gsap.context(() => {
      // Hero image parallax
      gsap.to('.bp-hero-bg', {
        yPercent: 20, ease: 'none',
        scrollTrigger: { trigger: '.bp-hero', start: 'top top', end: 'bottom top', scrub: true }
      })

      // Hero overlay entrance
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      heroTl
        .from('.bp-hero-meta', { opacity: 0, y: 30, duration: 0.7, delay: 0.3 })
        .from('.bp-hero-title', { opacity: 0, y: 50, duration: 0.9 }, 0.5)
        .from('.bp-hero-author', { opacity: 0, x: 20, duration: 0.6 }, 0.8)

      // Prose content blocks stagger
      gsap.from('.bp-prose > *', {
        opacity: 0, y: 40, stagger: 0.08, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.bp-prose', start: 'top 80%' }
      })

      // Related articles stagger
      gsap.from('.bp-related-card', {
        opacity: 0, y: 50, scale: 0.95, stagger: 0.12, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.bp-related', start: 'top 82%' }
      })
    }, pageRef)
    return () => ctx.revert()
  }, [post, slug])

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => (a.category === post.category ? -1 : 1) - (b.category === post.category ? -1 : 1))
    .slice(0, 3)

  return (
    <div ref={pageRef}>
      {/* ── Hero ── */}
      <section className={`bp-hero ${styles.hero}`}>
        <img src={post.image} alt={`Ảnh bìa: ${post.title}`} className={`bp-hero-bg ${styles.heroBg}`} />
        <div className={styles.heroOverlay}>
          <div className={`bp-hero-meta ${styles.heroMeta}`}>
            <span className={styles.heroCat}>{post.categoryLabel}</span>
            <span className={styles.heroDate}>{post.date}</span>
          </div>
          <h1 className={`bp-hero-title ${styles.heroTitle}`}>{post.title}</h1>
          <div className={`bp-hero-author ${styles.heroAuthor}`}>
            <div className={styles.authorAvatar}>HĐ</div>
            <div className={styles.authorInfo}>
              <span className={styles.authorLabel}>TÁC GIẢ:</span>
              <span className={styles.authorName}>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <article className={styles.article}>
        <div className={`bp-prose ${styles.prose}`}>
          {post.content.map((block, i) => {
            const key = `${block.type}-${i}`
            switch (block.type) {
              case 'heading':
                return <h2 key={key} className={styles.h2}>{block.body}</h2>
              case 'text':
                return <p key={key} className={styles.p}>{block.body}</p>
              case 'image':
                return (
                  <figure key={key} className={styles.figure}>
                    <img src={block.src} alt={block.alt} className={styles.contentImg} />
                  </figure>
                )
              case 'list':
                return (
                  <ul key={key} className={styles.list}>
                    {block.items.map((item, j) => (
                      <li key={`${key}-${j}`} className={styles.listItem}>{item}</li>
                    ))}
                  </ul>
                )
              case 'callout':
                return (
                  <blockquote key={key} className={styles.callout}>
                    <span className={styles.calloutLabel}>{block.label}</span>
                    <p className={styles.calloutText}>{block.body}</p>
                  </blockquote>
                )
              default:
                return null
            }
          })}
        </div>
      </article>

      {/* ── Related ── */}
      <section className={`bp-related ${styles.relatedSection}`}>
        <h2 className={styles.relatedTitle}>Bài viết liên quan</h2>
        <div className={styles.relatedGrid}>
          {related.map((p) => (
            <Link key={p.id} to={`/blog/${p.slug}`} className={`bp-related-card ${styles.relatedCard}`}>
              <img src={p.image} alt={p.title} className={styles.relatedImg} />
              <div className={styles.relatedOverlay}>
                <span className={styles.relatedCat}>{p.categoryLabel}</span>
                <h3 className={styles.relatedName}>{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
