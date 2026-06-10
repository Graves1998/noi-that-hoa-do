import styles from './ShopSidebar.module.css'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function ShopSidebar({
  categories = [],
  collections = [],
  activeCategory,
  setCategory,
  activeCollection,
  setCollection,
  activeAvailability = [],
  toggleAvailability,
  availabilityOptions = [],
  hasActiveFilters,
  resetFilters,
  onClose,
}) {
  return (
    <div className={styles.filterMain}>
      {onClose && (
        <button className={styles.closeBtn} onClick={onClose} aria-label="Đóng bộ lọc">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}

      {/* Categories */}
      <div className={styles.widget}>
        <div className={styles.widgetTitle}>Danh mục</div>
        <ul className={styles.checkList}>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                type="button"
                className={`${styles.checkRow} ${activeCategory === cat.id ? styles.checkRowActive : ''}`}
                onClick={() => setCategory(cat.id)}
              >
                <span className={styles.checkBox}><CheckIcon /></span>
                <span className={styles.checkLabel}>{cat.label}</span>
                {cat.count != null && <span className={styles.checkCount}>{cat.count}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Collection */}
      <div className={styles.widget}>
        <div className={styles.widgetTitle}>Bộ sưu tập</div>
        <ul className={styles.checkList}>
          {collections.map((col) => (
            <li key={col.id}>
              <button
                type="button"
                className={`${styles.checkRow} ${activeCollection === col.id ? styles.checkRowActive : ''}`}
                onClick={() => setCollection(col.id)}
              >
                <span className={styles.checkBox}><CheckIcon /></span>
                <span className={styles.checkLabel}>{col.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Availability */}
      <div className={styles.widget}>
        <div className={styles.widgetTitle}>Tình trạng</div>
        <div className={styles.badgeRow}>
          {availabilityOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`${styles.badge} ${activeAvailability.includes(opt.value) ? styles.badgeActive : ''}`}
              onClick={() => toggleAvailability(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        type="button"
        className={styles.resetBtn}
        onClick={resetFilters}
        disabled={!hasActiveFilters}
      >
        Xoá bộ lọc
      </button>
    </div>
  )
}
