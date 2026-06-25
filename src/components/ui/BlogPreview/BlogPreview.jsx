import { Link } from 'react-router-dom'
import { blogPosts } from '@data/blog'
import styles from './BlogPreview.module.css'

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3)

  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        {posts.map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`} className={styles.card}>
            <div className={styles.imgWrap}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.body}>
              <span className={styles.cat}>{post.categoryLabel}</span>
              <h3 className={styles.title}>{post.title}</h3>
              <span className={styles.readMore}>Đọc thêm &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
