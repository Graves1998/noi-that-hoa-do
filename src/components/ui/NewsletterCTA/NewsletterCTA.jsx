import styles from './NewsletterCTA.module.css'

export default function NewsletterCTA() {
  return (
    <section className={styles.section}>
      <img
        src="https://framerusercontent.com/images/EfZdV2fzLBheQe7HpdMyo9Q7tuY.jpg"
        alt=""
        className={styles.bgImage}
      />
      <div className={styles.overlay}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>Ưu đãi độc quyền</span>
          <h2 className={styles.title}>
            Đăng ký để nhận ưu đãi sớm nhất,<br />
            quyền truy cập sớm & quà tặng thành viên
          </h2>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input
              className={styles.input}
              type="email"
              required
              placeholder="Nhập email của bạn"
              aria-label="Địa chỉ email đăng ký nhận tin"
            />
            <button className={`btn btn--primary ${styles.btn}`} type="submit">
              Đăng ký ngay
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
