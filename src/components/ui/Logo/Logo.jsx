import defaultLogo from '@assets/logo-hoado.png'
import styles from './Logo.module.css'

/**
 * Logo dùng chung cho Header/Footer/...
 * - Đổi logo mới: thay file @assets/logo-hoado.png (giữ nguyên tên)
 *   hoặc truyền prop `src` (vd: lấy từ CMS) — không cần sửa code nơi dùng.
 * - Kích thước hiển thị do component cha quy định qua `className`
 *   (vd: .logoImg { height: ... }) — Logo tự co theo chiều cao đó,
 *   width tự động giữ đúng tỉ lệ ảnh.
 */
export default function Logo({ src = defaultLogo, alt = 'HOA ĐÔ', className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${styles.logo} ${className}`}
    />
  )
}
