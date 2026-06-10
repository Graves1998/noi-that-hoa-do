# Hoa Đô — Design Spec v1.0
# Generated via: Superpowers Brainstorming Methodology
# Date: 2026-06-08
# Status: APPROVED — ready for implementation

---

## 1. Project Overview

**Tên thương hiệu:** Nội thất Hoa Đô  
**Tagline:** Không gian sống — Đẳng cấp Việt  
**Mô hình:** Trang thương mại điện tử bán nội thất cao cấp  
**Cảm hứng clone:** Furnexa (furnexa.framer.website/shop) — lấy cấu trúc, Việt hóa toàn bộ  
**Đối tượng:** Người Việt Nam 28–55 tuổi, thu nhập cao, quan tâm interior design

---

## 2. Aesthetic Direction (Frontend Design Skill)

**Style:** Luxury Warm Minimalism — KHÔNG generic, KHÔNG AI-generic purple gradient  
**Điểm khác biệt so với Furnexa:**
- Font serif Việt-friendly thay vì sans-serif thông thường
- Color palette ấm hơn: đất nung, gỗ óc chó, kem ivory
- Asymmetric layout sections để tạo visual tension
- Texture overlay nhẹ trên hero (linen-like)
- Gold accent (#C9A86C) thay vì beige trung tính

---

## 3. Design System

### Colors
```
--color-bg:          #FAF8F5   /* Ivory warm white */
--color-surface:     #FFFFFF
--color-dark:        #1C1916   /* Warm black */
--color-mid:         #4A4540
--color-light:       #9A928A
--color-border:      #E8E2D9
--color-beige:       #F0E8DC
--color-gold:        #C9A86C   /* PRIMARY ACCENT — Hoa Đô gold */
--color-gold-dark:   #A8804A
--color-terracotta:  #C4714A   /* Secondary accent */
--color-sage:        #7A9E7E
--color-blush:       #C9A0A0
```

### Typography
```
--font-display: 'Cormorant Garamond', Georgia, serif   /* Headlines — luxury feel */
--font-body:    'DM Sans', 'Inter', sans-serif          /* Body — clean, readable */
--font-accent:  'Playfair Display', serif               /* Accent headlines */

Scale: 11 / 13 / 15 / 18 / 22 / 28 / 36 / 48 / 64 / 80px
Line heights: 1.4 (headlines) / 1.65 (body) / 1.2 (display)
Letter-spacing: 0.12em on uppercase labels / -0.02em on display
```

### Spacing (8px grid)
```
xs: 4px | sm: 8px | md: 16px | lg: 24px | xl: 32px
2xl: 48px | 3xl: 64px | 4xl: 80px | 5xl: 120px
```

### Shadows
```
--shadow-card:  0 2px 12px rgba(28,25,22,0.06);
--shadow-hover: 0 8px 32px rgba(28,25,22,0.12);
--shadow-modal: 0 24px 64px rgba(28,25,22,0.18);
```

---

## 4. Page Inventory

### Pages cần build (theo thứ tự)
| # | Page | Độ ưu tiên | Status |
|---|------|-----------|--------|
| 1 | shop.html | 🔴 Critical | rebuild |
| 2 | index.html | 🔴 Critical | rebuild |
| 3 | product-detail.html | 🟡 High | todo |
| 4 | cart.html | 🟡 High | todo |
| 5 | about.html | 🟢 Medium | todo |
| 6 | contact.html | 🟢 Medium | todo |

---

## 5. Component Inventory

### Global
- `Header` — fixed, glass blur, logo + nav + icons (search/wishlist/cart)
- `MobileNav` — full-screen slide-in overlay
- `Footer` — 4-col grid, newsletter, social, legal links
- `Toast` — bottom center notification
- `CartBadge` — animated counter

### Shop Page
- `ShopHero` — full-width banner với parallax image + text overlay
- `Breadcrumb` — minimal path indicator
- `FilterSidebar` — sticky left panel (category, collection, availability, price range)
- `FilterBar` — mobile top bar (filter toggle + sort select)
- `ProductGrid` — 3-col CSS Grid, responsive
- `ProductCard` — image / badges / wishlist / quick-add / name / price / swatches
- `LoadMore` — button, expandable grid

### Home Page
- `HeroSection` — fullscreen với parallax + animated text entrance
- `MarqueeBar` — dark background, infinite scroll text
- `CategoryStrip` — 5-col image cards với hover Ken Burns
- `FeaturedGrid` — 4-col product grid
- `SplitPromo` — image + text 50/50 split
- `TestimonialGrid` — 3-col review cards
- `FeaturesBar` — dark background, 4 icons

---

## 6. Animation Spec (motion-framer Skill)

Xem chi tiết: `/skills/motion-framer/SKILL.md`

### Tóm tắt key animations
1. **Page load**: Hero text fade+slide (0.9s, stagger 0.1s per word)
2. **Scroll entrance**: Cards stagger từ dưới lên (0.08s stagger)
3. **Card hover**: Lift -6px + shadow + image scale 1.04
4. **Quick-add**: Slide up từ bottom của card image
5. **Wishlist**: Heart fill bounce (elastic.out)
6. **Filter sidebar**: Slide in từ left (mobile)
7. **Color swatch select**: Spring scale
8. **Parallax**: Hero image scroll -0.3x speed
9. **Marquee**: Infinite 22s CSS animation

---

## 7. Technical Stack

```
HTML5 (semantic)
CSS3 (custom properties, grid, flexbox, animations)
JavaScript ES6+ (modules)
GSAP 3 + ScrollTrigger (from cdnjs CDN)
Google Fonts: Cormorant Garamond + DM Sans
Images: framerusercontent.com CDN (free to use)
```

**File structure:**
```
Nội thất hoa đô/
├── index.html
├── shop.html
├── css/
│   ├── style.css        ← design tokens + layout
│   ├── animations.css   ← motion tokens + CSS animations
│   └── components.css   ← component-specific styles
├── js/
│   ├── main.js          ← core interactions
│   ├── animations.js    ← GSAP animation setup
│   └── shop.js          ← shop-specific logic
├── docs/
│   ├── design-spec.md   ← this file
│   └── brand-guide.md
└── skills/
    └── motion-framer/SKILL.md
```

---

## 8. Implementation Plan (Superpowers writing-plans)

### Phase 1 — Foundation (Step 1)
- [ ] Rebuild CSS với design tokens mới (Gold palette, Cormorant font)
- [ ] Tách animations.css riêng
- [ ] Setup GSAP CDN trong HTML

### Phase 2 — Shop Page (Step 2)
- [ ] Rebuild shop.html với new design system
- [ ] Add GSAP scroll animations
- [ ] Filter sidebar với animation

### Phase 3 — Home Page (Step 3)
- [ ] Rebuild index.html với hero parallax
- [ ] Add stagger entrance animations
- [ ] Marquee, category strip, testimonials

### Phase 4 — Polish (Step 4)
- [ ] Micro-interactions (hover, tap, swatch)
- [ ] Page transitions
- [ ] Mobile optimization
- [ ] Performance audit

---

*Spec approved — proceed to Phase 1*
