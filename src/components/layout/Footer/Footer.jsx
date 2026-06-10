import { Link } from 'react-router-dom'
import LogoMark from '@components/ui/LogoMark/LogoMark'
import styles from './Footer.module.css'

const linkColumns = [
  {
    title: 'Liên kết',
    links: [
      { label: 'Trang chủ', to: '/' },
      { label: 'Cửa hàng', to: '/shop' },
      { label: 'Giới thiệu', to: '#' },
      { label: 'Blog', to: '#' },
      { label: 'FAQ', to: '#' },
    ],
  },
  {
    title: 'Danh mục',
    links: [
      { label: 'Phòng khách', to: '/shop?cat=living' },
      { label: 'Phòng ngủ', to: '/shop?cat=bedroom' },
      { label: 'Văn phòng', to: '/shop?cat=office' },
      { label: 'Phòng ăn', to: '/shop?cat=dining' },
      { label: 'Đèn trang trí', to: '/shop?cat=lighting' },
    ],
  },
  {
    title: 'Hỗ trợ',
    links: [
      { label: 'Vận chuyển', to: '#' },
      { label: 'Đổi trả', to: '#' },
      { label: 'Bảo mật', to: '#' },
      { label: 'Điều khoản', to: '#' },
      { label: 'Liên hệ', to: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Content — Logo + Newsletter */}
        <div className={styles.top}>
          <Link to="/" className={styles.logo}>
            <LogoMark style={{ width: 28, height: 32, color: 'var(--gold)', flexShrink: 0 }} />
            <div>
              <div className={styles.logoName}>HOA ĐÔ</div>
              <div className={styles.logoSub}>Bất Động Sản &amp; Nội Thất</div>
            </div>
          </Link>

          <div className={styles.newsletter}>
            <p className={styles.newsletterLabel}>Bản tin</p>
            <form className={styles.nlForm} onSubmit={(e) => e.preventDefault()}>
              <input
                className={styles.nlInput}
                type="email"
                required
                placeholder="Địa chỉ email của bạn"
              />
              <button className={styles.nlBtn} type="submit" aria-label="Đăng ký nhận tin">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Content — Description/Contacts + Link columns */}
        <div className={styles.bottom}>
          <div className={styles.left}>
            <p className={styles.desc}>
              Nội thất cao cấp được thiết kế cho cuộc sống hiện đại và không gian làm việc
              đầy cảm hứng. Chế tác từ trái tim Việt Nam.
            </p>
            <div className={styles.contactList}>
              <a className={styles.contactItem} href="mailto:info@noithathoado.vn">
                <span className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                info@noithathoado.vn
              </a>
              <a className={styles.contactItem} href="tel:19001234">
                <span className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                1900 1234
              </a>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  123 Đường Nguyễn Huệ, Quận 1,
                  <br />
                  TP. Hồ Chí Minh
                </span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            {linkColumns.map((col) => (
              <div className={styles.linkCol} key={col.title}>
                <p className={styles.linkColTitle}>{col.title}</p>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.to.startsWith('/') ? (
                        <Link to={link.to}>{link.label}</Link>
                      ) : (
                        <a href={link.to}>{link.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Content */}
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>© 2026 Nội thất Hoa Đô. Tất cả quyền được bảo lưu.</p>
          <div className={styles.social}>
            <a href="#" className={styles.socBtn} aria-label="Facebook" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className={styles.socBtn} aria-label="Instagram" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className={styles.socBtn} aria-label="Twitter" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 5.92c-.74.33-1.53.55-2.36.65a4.1 4.1 0 0 0 1.8-2.27c-.8.47-1.69.81-2.63 1a4.13 4.13 0 0 0-7.04 3.77A11.7 11.7 0 0 1 3.16 4.6a4.13 4.13 0 0 0 1.28 5.51c-.67-.02-1.3-.2-1.85-.5v.05a4.13 4.13 0 0 0 3.31 4.05c-.6.16-1.23.18-1.85.07a4.13 4.13 0 0 0 3.86 2.87A8.3 8.3 0 0 1 2 18.57 11.7 11.7 0 0 0 8.29 20.4c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.3 8.3 0 0 0 22 5.92z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
