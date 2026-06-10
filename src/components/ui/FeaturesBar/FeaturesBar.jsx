export default function FeaturesBar() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="1" y="3" width="15" height="13" rx="1" />
          <path d="M16 8l3 1 4 2v5h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: 'Giao hàng toàn quốc',
      desc: 'Miễn phí cho đơn trên 5 triệu',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Bảo hành chính hãng',
      desc: 'Tối đa 5 năm cho mọi sản phẩm',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: 'Lắp đặt tận nơi',
      desc: 'Đội ngũ chuyên nghiệp, đúng giờ',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: 'Đổi trả 30 ngày',
      desc: 'Không thích, hoàn tiền 100%',
    },
  ]

  return (
    <section className="features-bar">
      <div className="features-inner">
        {features.map((f) => (
          <div key={f.title} className="feat-item">
            <div className="feat-icon">{f.icon}</div>
            <div className="feat-text">
              <strong>{f.title}</strong>
              <span>{f.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
