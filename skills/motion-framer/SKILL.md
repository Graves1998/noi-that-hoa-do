# Skill: motion-framer (Vanilla JS + GSAP)
# Source: freshtechbro/claudedesignskills · Adapted for Hoa Đô HTML/CSS/JS project

## Overview
Governs ALL animations in Nội thất Hoa Đô. Project uses vanilla HTML/CSS/JS (no React),
so Framer Motion patterns are implemented via GSAP 3 + ScrollTrigger + CSS.

**Stack:**
- GSAP 3 (cdnjs CDN) — timelines, spring-like tweens
- ScrollTrigger plugin — scroll-based effects
- IntersectionObserver — viewport entry
- CSS transitions — micro-interactions

---

## Animation Tokens

```css
--motion-fast:    0.18s;
--motion-normal:  0.32s;
--motion-slow:    0.55s;
--motion-hero:    0.9s;
--ease-out:       cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);
```

## Pattern: Spring hover (whileHover equivalent)
```js
el.addEventListener("mouseenter", () =>
  gsap.to(el, { y: -4, scale: 1.02, duration: 0.25, ease: "power2.out" })
);
el.addEventListener("mouseleave", () =>
  gsap.to(el, { y: 0, scale: 1, duration: 0.35, ease: "power2.inOut" })
);
```

## Pattern: Stagger scroll entrance (whileInView + staggerChildren)
```js
gsap.from(".product-card", {
  opacity: 0, y: 40, stagger: 0.08, duration: 0.6,
  ease: "power3.out",
  scrollTrigger: { trigger: ".product-grid", start: "top 80%", once: true }
});
```

## Pattern: AnimatePresence exit
```js
function animateOut(el, cb) {
  gsap.to(el, { opacity: 0, y: -10, scale: 0.97, duration: 0.25,
    ease: "power2.in", onComplete: cb });
}
```

## Hoa Đô Animation Inventory

| Element             | Effect                  | Duration | Easing        |
|---------------------|-------------------------|----------|---------------|
| Hero text           | Fade + slide up         | 0.9s     | power3.out    |
| Nav scroll         | Shadow + compress        | 0.3s     | sine.out      |
| Product cards       | Stagger fade-up         | 0.6s     | power3.out    |
| Card hover          | Lift -4px + shadow      | 0.25s    | power2.out    |
| Quick-add           | Slide up                | 0.22s    | back.out      |
| Wishlist heart      | Scale bounce + fill     | 0.3s     | back.out(3)   |
| Color swatch        | Spring scale            | 0.2s     | elastic.out   |
| Sidebar filter      | Slide in from left      | 0.35s    | power3.out    |
| Toast               | Slide up + fade         | 0.3s     | power2.out    |
| Banner parallax     | Scroll parallax         | realtime | linear        |
| Hero marquee        | Infinite slide          | 22s      | linear        |
| Page transition     | Cross-fade              | 0.4s     | sine.inOut    |
| Category img hover  | Ken Burns zoom          | 6s       | linear        |

## Performance Rules
1. Animate transform/opacity only — never left/top/width/height
2. ScrollTrigger: once: true for entrance animations
3. Respect prefers-reduced-motion
4. will-change: transform only on animated elements
