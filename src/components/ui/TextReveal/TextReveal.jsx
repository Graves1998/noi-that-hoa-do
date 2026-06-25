import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './TextReveal.module.css'

gsap.registerPlugin(ScrollTrigger)

function splitIntoWords(children) {
  const words = []
  const processNode = (node, key = 0) => {
    if (typeof node === 'string') {
      node.split(/(\s+)/).forEach((part, i) => {
        if (/^\s+$/.test(part)) {
          words.push(<span key={`${key}-sp-${i}`}> </span>)
        } else if (part) {
          words.push(
            <span key={`${key}-w-${i}`} className={styles.wordWrap}>
              <span className={styles.word}>{part}</span>
            </span>
          )
        }
      })
    } else if (node?.type === 'br') {
      words.push(<br key={`${key}-br`} />)
    } else if (node?.props?.children) {
      const Tag = node.type || 'span'
      const innerWords = []
      const processInner = (child, ik = 0) => {
        if (typeof child === 'string') {
          child.split(/(\s+)/).forEach((part, i) => {
            if (/^\s+$/.test(part)) {
              innerWords.push(<span key={`${ik}-sp-${i}`}> </span>)
            } else if (part) {
              innerWords.push(
                <span key={`${ik}-w-${i}`} className={styles.wordWrap}>
                  <span className={styles.word}>{part}</span>
                </span>
              )
            }
          })
        } else if (child?.type === 'br') {
          innerWords.push(<br key={`${ik}-br`} />)
        } else {
          innerWords.push(child)
        }
      }
      if (Array.isArray(node.props.children)) {
        node.props.children.forEach((c, ci) => processInner(c, `${key}-${ci}`))
      } else {
        processInner(node.props.children, key)
      }
      const { children: _, ...restProps } = node.props
      words.push(<Tag key={`${key}-tag`} {...restProps}>{innerWords}</Tag>)
    }
  }

  if (Array.isArray(children)) {
    children.forEach((child, i) => processNode(child, i))
  } else {
    processNode(children, 0)
  }
  return words
}

export default function TextReveal({
  children,
  tag: Tag = 'h2',
  className = '',
  scrollTrigger = true,
  start = 'top 85%',
  stagger = 0.035,
  duration = 0.6,
  y = 40,
  delay = 0,
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const wordEls = ref.current.querySelectorAll(`.${styles.word}`)
    if (!wordEls.length) return

    const animProps = {
      y,
      opacity: 0,
      duration,
      stagger,
      ease: 'power3.out',
      delay,
    }

    if (scrollTrigger) {
      animProps.scrollTrigger = {
        trigger: ref.current,
        start,
        toggleActions: 'play none none none',
      }
    }

    const anim = gsap.from(wordEls, animProps)
    return () => anim.revert()
  }, [scrollTrigger, start, stagger, duration, y, delay])

  return (
    <Tag ref={ref} className={`${styles.container} ${className}`}>
      {splitIntoWords(children)}
    </Tag>
  )
}
