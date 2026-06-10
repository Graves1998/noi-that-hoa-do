import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '@context/CartContext'
import LogoMark from '@components/ui/LogoMark/LogoMark'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <header className={`hd-site ${scrolled ? 'is-scrolled' : ''} ${styles.header}`}>
        <div className="hd-inner">
          {/* Logo */}
          <Link to="/" className="hd-logo" onClick={closeMenu}>
            <LogoMark className={styles.logoMark} />
            <div className="hd-logo__text">
              <span className="hd-logo__name">HOA ĐÔ</span>
              <span className="hd-logo__sub">Bất Động Sản &amp; Nội Thất</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hd-nav">
            <NavLink to="/" end>Trang chủ</NavLink>
            <NavLink to="/shop">Cửa hàng</NavLink>
            <a href="#">Giới thiệu</a>
            <a href="#">Blog</a>
            <a href="#">Liên hệ</a>
          </nav>

          {/* Utils */}
          <div className="hd-utils">
            <button className="hd-icon" aria-label="Tìm kiếm">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M16.5 16.5L22 22" /></svg>
            </button>
            <button className="hd-icon" aria-label="Yêu thích">
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </button>
            <button className="hd-icon" aria-label="Giỏ hàng" style={{ position: 'relative' }}>
              <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              {count > 0 && <span className={styles.cartBadge}>{count}</span>}
            </button>
            <button
              className={`hd-burger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className={`hd-mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <NavLink to="/"     end onClick={closeMenu}>Trang chủ</NavLink>
        <NavLink to="/shop"     onClick={closeMenu}>Cửa hàng</NavLink>
        <a href="#" onClick={closeMenu}>Giới thiệu</a>
        <a href="#" onClick={closeMenu}>Blog</a>
        <a href="#" onClick={closeMenu}>Liên hệ</a>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '8px 0' }} />
        <a href="tel:19001234" style={{ fontSize: '1.1rem', color: 'var(--gold)' }}>1900 1234</a>
      </nav>
    </>
  )
}
