import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductCard from '@components/ui/ProductCard/ProductCard'
import TextReveal from '@components/ui/TextReveal/TextReveal'
import FeaturesBar from '@components/ui/FeaturesBar/FeaturesBar'
import MarqueeBar from '@components/ui/MarqueeBar/MarqueeBar'
import PromoBanner from '@components/ui/PromoBanner/PromoBanner'
import StatsCounter from '@components/ui/StatsCounter/StatsCounter'
import Testimonials from '@components/ui/Testimonials/Testimonials'
import BlogPreview from '@components/ui/BlogPreview/BlogPreview'
import NewsletterCTA from '@components/ui/NewsletterCTA/NewsletterCTA'
import { products } from '@data/products'
import { navCategories } from '@data/categories'
import styles from './Home.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {

      // ─── Hero: staggered entrance with blur ───
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      heroTl
        .from('.hero-eyebrow', { opacity: 0, y: 30, duration: .7 })
        .from('.hero-sub', { opacity: 0, y: 30, filter: 'blur(8px)', duration: .8 }, .8)
        .from('.hero-cta', { opacity: 0, y: 24, duration: .7 }, 1)
        .from('.hero-img', {
          opacity: 0, scale: 1.08, filter: 'blur(12px)', duration: 1.4, ease: 'power2.out'
        }, .2)

      // ─── Hero image parallax ───
      gsap.to('.hero-img img', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })

      // ─── Reusable helpers ───
      const fadeUp = (selector, trigger, opts = {}) => {
        gsap.from(selector, {
          opacity: 0,
          y: opts.y || 50,
          duration: opts.duration || .85,
          stagger: opts.stagger || 0,
          ease: opts.ease || 'power3.out',
          scrollTrigger: {
            trigger,
            start: opts.start || 'top 82%',
            toggleActions: 'play none none none',
          }
        })
      }

      const slideIn = (selector, trigger, fromX) => {
        gsap.from(selector, {
          opacity: 0, x: fromX, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger, start: 'top 75%' }
        })
      }

      // ─── Category cards — stagger with blur ───
      gsap.from('.cat-card', {
        opacity: 0, y: 60, scale: .92, filter: 'blur(6px)', stagger: .08, duration: .7, ease: 'power3.out',
        scrollTrigger: { trigger: '.cat-section', start: 'top 78%' }
      })

      // ─── Story: text slide left, image clip-path reveal + parallax ───
      slideIn('.story-text', '.story-section', -60)
      gsap.from('.story-img', {
        clipPath: 'inset(10% 10% 10% 10%)', opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.story-section', start: 'top 70%' }
      })
      gsap.to('.story-img img', {
        yPercent: 10, ease: 'none',
        scrollTrigger: { trigger: '.story-section', start: 'top bottom', end: 'bottom top', scrub: true }
      })

      // ─── 2-Image Showcase — clip-path + blur reveals ───
      gsap.from('.showcase-left', {
        clipPath: 'inset(0 100% 0 0)', opacity: 0, filter: 'blur(8px)', duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.showcase-section', start: 'top 72%' }
      })
      gsap.from('.showcase-right', {
        clipPath: 'inset(0 0 0 100%)', opacity: 0, filter: 'blur(8px)', duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.showcase-section', start: 'top 72%' }
      })
      fadeUp('.showcase-center', '.showcase-section', { y: 40, start: 'top 75%' })
      gsap.to('.showcase-left img', {
        yPercent: 10, ease: 'none',
        scrollTrigger: { trigger: '.showcase-section', start: 'top bottom', end: 'bottom top', scrub: true }
      })
      gsap.to('.showcase-right img', {
        yPercent: 10, ease: 'none',
        scrollTrigger: { trigger: '.showcase-section', start: 'top bottom', end: 'bottom top', scrub: true }
      })

      // ─── Featured product cards ───
      gsap.from('.feat-grid .prod-card', {
        opacity: 0, y: 50, scale: .95, stagger: .1, duration: .75, ease: 'power3.out',
        scrollTrigger: { trigger: '.feat-grid', start: 'top 80%' }
      })

      // ─── Promo banner 3-col ───
      slideIn('.promo-col-left', '.promo-parallax', -80)
      slideIn('.promo-col-right', '.promo-parallax', 80)
      fadeUp('.promo-content', '.promo-parallax', { y: 40, start: 'top 65%' })

      // ─── Best sellers ───
      gsap.from('.best-grid .prod-card', {
        opacity: 0, y: 50, scale: .95, stagger: .08, duration: .75, ease: 'power3.out',
        scrollTrigger: { trigger: '.best-grid', start: 'top 80%' }
      })

      // ─── Features bar ───
      gsap.from('.feat-item', {
        opacity: 0, y: 40, scale: .9, stagger: .1, duration: .65, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.features-bar', start: 'top 80%' }
      })

      // ─── Testimonials ───
      fadeUp('.testi-wrap', '.testi-wrap', { y: 30 })

      // ─── Blog cards ───
      gsap.from('.blog-wrap [class*="card"]', {
        opacity: 0, y: 50, scale: .95, stagger: .12, duration: .8, ease: 'power3.out',
        scrollTrigger: { trigger: '.blog-wrap', start: 'top 78%' }
      })

      // ─── CTA Box — scale + glow ───
      gsap.from('.cta-box', {
        opacity: 0, scale: .92, boxShadow: '0 0 0 rgba(199,163,93,0)', duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-box', start: 'top 80%' },
        onComplete: () => {
          gsap.to('.cta-box', { boxShadow: '0 8px 40px rgba(199,163,93,.15)', duration: .6, ease: 'power2.out' })
        }
      })

      // ─── Instagram + Newsletter ───
      fadeUp('.insta-section', '.insta-section', { y: 30 })
      fadeUp('.newsletter-section', '.newsletter-section', { y: 40 })

      // ─── Scroll progress bar ───
      gsap.to('.scroll-progress', {
        scaleX: 1, ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: .3 }
      })

    }, pageRef)
    return () => ctx.revert()
  }, [])

  const featured = products.filter((p) => p.badge === 'sale').slice(0, 4)
  const bestSellers = products.filter((p) => p.badge !== 'sale').slice(0, 6)

  return (
    <div ref={pageRef}>
      <div className={`scroll-progress ${styles.scrollProgress}`} />

      {/* ── Hero ── */}
      <section className={`hero-section ${styles.hero}`}>
        <div className={styles.heroInner}>
          <span className="eyebrow hero-eyebrow">Bộ sưu tập 2026</span>
          <TextReveal
            tag="h1"
            className={styles.heroH1}
            scrollTrigger={false}
            delay={0.2}
            stagger={0.04}
            y={50}
            duration={0.7}
          >
            Tìm kiếm những sản phẩm được thiết kế để <em>biến đổi ngôi nhà của bạn</em>
          </TextReveal>
          <p className={`${styles.heroSub} hero-sub`}>
            Nội thất cao cấp — thiết kế Việt Nam, chất lượng quốc tế.
            Mỗi sản phẩm là một tuyên ngôn về phong cách sống.
          </p>
          <div className={`${styles.heroCta} hero-cta`}>
            <Link to="/shop" className="btn btn--primary">Khám phá ngay</Link>
            <Link to="/shop" className="btn btn--outline">Câu chuyện của chúng tôi</Link>
          </div>
        </div>
        <div className={`${styles.heroImage} hero-img`}>
          <img
            src="https://framerusercontent.com/images/2hr7LQj1OIdhEKjXv75QScK1Jto.png"
            alt="Nội thất Hoa Đô"
          />
        </div>
      </section>

      <MarqueeBar dark={false} />

      {/* ── Category Nav ── */}
      <section className={`cat-section ${styles.catSection}`}>
        <div className={styles.sectionHeaderWrap}>
          <span className="eyebrow">Danh mục</span>
          <TextReveal tag="h2" start="top 85%" stagger={0.04} y={35}>
            Tìm phong cách của bạn
          </TextReveal>
        </div>
        <div className={styles.catGrid}>
          {navCategories.map((cat) => (
            <Link key={cat.id} to={`/shop?cat=${cat.id}`} className={`cat-card ${styles.catCard}`}>
              <div className={styles.catImg} style={{ backgroundImage: `url(${cat.image})` }} />
              <div className={styles.catOverlay}>
                <span className={styles.catLabel}>{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className={`story-section ${styles.storySection}`}>
        <div className={styles.storyInner}>
          <div className={`story-text ${styles.storyText}`}>
            <span className="eyebrow">Câu chuyện của chúng tôi</span>
            <TextReveal tag="h2" start="top 78%" stagger={0.04} y={40}>
              Nghề thủ công gặp thiết kế hiện đại
            </TextReveal>
            <p>
              Hoa Đô được thành lập với niềm tin rằng không gian sống đẹp là quyền của tất cả mọi người.
              Chúng tôi kết hợp nghề thủ công truyền thống Việt Nam với thiết kế đương đại để tạo ra
              những sản phẩm vừa đẹp, vừa bền, vừa có hồn.
            </p>
            <p>
              Mỗi sản phẩm đều được kiểm tra kỹ lưỡng về chất lượng và tuổi thọ trước khi đến tay
              khách hàng — vì chúng tôi tin rằng một chiếc ghế tốt có thể đồng hành cùng bạn suốt nhiều thế hệ.
            </p>
            <Link to="/shop" className="btn btn--primary" style={{ marginTop: 'var(--sp-6)', alignSelf: 'flex-start' }}>
              Khám phá sản phẩm
            </Link>
          </div>
          <div className={`story-img ${styles.storyImg}`}>
            <img
              src="https://framerusercontent.com/images/EfZdV2fzLBheQe7HpdMyo9Q7tuY.jpg"
              alt="Xưởng sản xuất Hoa Đô"
            />
          </div>
        </div>
      </section>

      {/* ── 2-Image Showcase ── */}
      <section className={`showcase-section ${styles.showcaseSection}`}>
        <div className={styles.showcaseGrid}>
          <div className={`showcase-left ${styles.showcaseImg}`}>
            <img
              src="https://framerusercontent.com/images/WgdTw7x2dxjTUNtMggjfwAim8.jpg"
              alt="Phòng khách hiện đại"
            />
          </div>
          <div className={`showcase-center ${styles.showcaseCenter}`}>
            <span className="eyebrow">Bộ sưu tập nổi bật</span>
            <TextReveal tag="h2" className={styles.showcaseTitle} start="top 80%" stagger={0.04} y={35}>
              Phòng khách <em>hiện đại</em>
            </TextReveal>
            <p className={styles.showcaseDesc}>
              Khám phá bộ sưu tập nội thất phòng khách với thiết kế tối giản, sang trọng — mang đến cảm giác thư thái cho mọi ngôi nhà.
            </p>
            <Link to="/shop" className="btn btn--outline">Khám phá</Link>
          </div>
          <div className={`showcase-right ${styles.showcaseImg}`}>
            <img
              src="https://framerusercontent.com/images/2hr7LQj1OIdhEKjXv75QScK1Jto.png"
              alt="Nội thất sang trọng"
            />
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionHeaderWrap}>
          <span className="eyebrow">Ưu đãi đặc biệt</span>
          <TextReveal tag="h2" start="top 85%" stagger={0.04} y={35}>
            Sản phẩm giảm giá
          </TextReveal>
          <Link to="/shop" className={styles.seeAll}>Xem tất cả &rarr;</Link>
        </div>
        <div className={`feat-grid ${styles.prodGrid}`}>
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ── Promo Banner ── */}
      <section className="promo-parallax">
        <PromoBanner
          imageLeft="https://framerusercontent.com/images/WgdTw7x2dxjTUNtMggjfwAim8.jpg"
          imageRight="https://framerusercontent.com/images/EfZdV2fzLBheQe7HpdMyo9Q7tuY.jpg"
          eyebrow="Ưu đãi có hạn"
          title="Giảm đến 50% các sản phẩm bán chạy"
          description="Nâng tầm không gian sống với những thiết kế tinh tế từ Hoa Đô. Chương trình ưu đãi chỉ kéo dài trong thời gian có hạn."
          buttonText="Mua ngay"
          buttonTo="/shop"
        />
      </section>

      {/* ── Best Sellers ── */}
      <section className={styles.bestSection}>
        <div className={styles.sectionHeaderWrap}>
          <span className="eyebrow">Bán chạy nhất</span>
          <TextReveal tag="h2" start="top 85%" stagger={0.04} y={35}>
            Được yêu thích nhất
          </TextReveal>
          <Link to="/shop" className={styles.seeAll}>Xem tất cả &rarr;</Link>
        </div>
        <div className={`best-grid ${styles.bestGrid}`}>
          {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <FeaturesBar />

      {/* ── Why Choose Us ── */}
      <section className={`why-section ${styles.whySection}`}>
        <div className={styles.whyInner}>
          <span className={`eyebrow ${styles.whyEyebrow}`}>Tại sao chọn Hoa Đô</span>
          <TextReveal
            tag="h2"
            className={styles.whyTitle}
            start="top 80%"
            stagger={0.03}
            y={45}
            duration={0.65}
          >
            Thiết kế vượt thời gian,{' '}
            <span className={styles.whyIcon}>
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </span>{' '}
            sự thoải mái vượt trội &{' '}
            <span className={styles.whyIcon}>
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </span>{' '}
            <em>chất lượng thủ công</em> hàng đầu
          </TextReveal>
        </div>
      </section>

      <StatsCounter />

      {/* ── Testimonials ── */}
      <div className="testi-wrap">
        <Testimonials />
      </div>

      {/* ── Blog ── */}
      <section className={`blog-wrap ${styles.blogWrap}`}>
        <div className={styles.sectionHeaderWrap + ' ' + styles.center}>
          <span className="eyebrow">Blog</span>
          <TextReveal tag="h2" start="top 85%" stagger={0.04} y={35}>
            Cảm hứng & hướng dẫn
          </TextReveal>
        </div>
        <BlogPreview />
      </section>

      {/* ── CTA Box — Furnexa-style ── */}
      <div className={`cta-box ${styles.ctaBox}`}>
        <TextReveal tag="h2" className={styles.ctaBoxTitle} start="top 85%" stagger={0.04} y={35}>
          Biến đổi không gian sống của bạn ngay hôm nay
        </TextReveal>
        <Link to="/shop" className="btn btn--primary">Khám phá bộ sưu tập</Link>
      </div>

      {/* ── Instagram CTA ── */}
      <section className={`insta-section ${styles.instagramSection}`}>
        <div className={styles.instaInner}>
          <span className={styles.instaHandle}>@noithat_hoado</span>
          <TextReveal tag="h2" className={styles.instaTitle} start="top 85%" stagger={0.04} y={30}>
            Theo dõi chúng tôi trên Instagram
          </TextReveal>
        </div>
      </section>

      <div className="newsletter-section">
        <NewsletterCTA />
      </div>

      <MarqueeBar dark />
    </div>
  )
}
