import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '@components/ui/Logo/Logo'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
            <Logo className={styles.logoImg} />
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
