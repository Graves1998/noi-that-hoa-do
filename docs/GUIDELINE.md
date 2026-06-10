# HOA ĐÔ — UI Design Guideline
> **Tài liệu tham chiếu bắt buộc** cho mọi màn hình, component và trang web.  
> Mọi quyết định thiết kế đều phải bám sát file này. Cập nhật lần cuối: 2026-06-08  
> Nguồn gốc: Brand Guidelines PDF chính thức ©2026 Hoa Đô

---

## 0. Tổng quan thương hiệu

| Thuộc tính | Nội dung |
|---|---|
| **Tên thương hiệu** | HOA ĐÔ |
| **Tagline** | Tinh Hoa Bất Động Sản & Không Gian Sống |
| **Lĩnh vực** | Real Estate · Construction · Interior |
| **Thị trường** | Cần Thơ & Đồng bằng sông Cửu Long |
| **Positioning** | Đất – Nhà – Không gian sống – Giá trị tài sản |
| **Tone** | Tinh tế · Ổn định · Đa lĩnh vực · Giữ vững bản sắc |

**Phương châm thiết kế:** Mở rộng có kiểm soát, đa lĩnh vực nhưng giữ vững bản sắc.

---

## 1. Màu sắc (Color System)

> ⚠️ **QUY TẮC QUAN TRỌNG:** Tôn sáng (`Ivory Mist`) là màu nền chủ đạo trên toàn bộ UI. Màu tối (`Charcoal Black`) chỉ dùng cho các dark section điểm nhấn, không phải nền mặc định.

### 1.1 Bảng màu chính thức

| Tên | HEX | RGB | CMYK | Vai trò |
|---|---|---|---|---|
| **Golden Sand** | `#C7A35D` | 199, 163, 93 | 0, 18, 54, 22 | Màu chủ đạo — accent, CTA, logo |
| **Ivory Mist** | `#F5F2EC` | 245, 242, 236 | 0, 1, 4, 4 | **Nền trang chủ đạo (LIGHT MODE)** |
| **Charcoal Black** | `#2B2B2B` | 43, 43, 43 | 0, 0, 0, 83 | Text chính, nền dark section |
| **Soft Honey** | `#4A4A4A` | 74, 74, 74 | 0, 13, 40, 10 | Text phụ, icon |
| **Neutral Gray** | `#A8A8A8` | 168, 168, 168 | 0, 0, 0, 34 | Text muted, border, placeholder |

### 1.2 Màu mở rộng (dẫn xuất cho UI)

```
/* Derived from brand palette */
Golden Sand Dark  : #A8804A   /* Hover state cho accent */
Golden Sand Light : #E6D5A8   /* Background tint nhẹ */
Golden Sand 10%   : rgba(199,163,93,0.10)  /* Surface accent */
Golden Sand 20%   : rgba(199,163,93,0.20)  /* Hover bg */
White Surface     : #FFFFFF   /* Card, input bg */
Light Beige       : #EDE8DF   /* Beige tối hơn Ivory */
Border Default    : #E4DDD2   /* Đường viền nhẹ */
```

### 1.3 CSS Custom Properties — bắt buộc dùng trong mọi file CSS

```css
:root {
  /* ── CORE BRAND ───────────────────────────────── */
  --gold:          #C7A35D;   /* Golden Sand — primary accent */
  --gold-dark:     #A8804A;   /* Hover, pressed */
  --gold-light:    #E6D5A8;   /* Tint nhẹ */
  --gold-10:       rgba(199,163,93,0.10);
  --gold-20:       rgba(199,163,93,0.20);

  /* ── BACKGROUNDS (light-first) ────────────────── */
  --bg-page:       #F5F2EC;   /* Ivory Mist — nền trang */
  --bg-surface:    #FFFFFF;   /* Card, modal, input */
  --bg-beige:      #EDE8DF;   /* Section xen kẽ */
  --bg-dark:       #2B2B2B;   /* Charcoal — dark section */
  --bg-dark-soft:  #3A3A3A;   /* Hover trên dark bg */

  /* ── TEXT ─────────────────────────────────────── */
  --text-primary:  #2B2B2B;   /* Charcoal Black */
  --text-secondary:#4A4A4A;   /* Soft Honey */
  --text-muted:    #A8A8A8;   /* Neutral Gray */
  --text-on-dark:  #F5F2EC;   /* Text trên dark bg */
  --text-gold:     #C7A35D;   /* Gold label, eyebrow */

  /* ── BORDERS ──────────────────────────────────── */
  --border:        #E4DDD2;   /* Default border */
  --border-dark:   #2B2B2B;   /* Focus, active border */
  --border-gold:   #C7A35D;   /* Gold border accent */

  /* ── SHADOWS ──────────────────────────────────── */
  --shadow-sm:     0 1px 4px rgba(43,43,43,0.06);
  --shadow-md:     0 4px 20px rgba(43,43,43,0.10);
  --shadow-lg:     0 12px 40px rgba(43,43,43,0.14);
  --shadow-gold:   0 4px 20px rgba(199,163,93,0.20);
}
```

### 1.4 Quy tắc dùng màu trên nền sáng (LIGHT UI — chủ đạo)

| Yếu tố | Màu sử dụng |
|---|---|
| Page background | `--bg-page` (#F5F2EC) |
| Card / Surface | `--bg-surface` (#FFFFFF) |
| Text heading | `--text-primary` (#2B2B2B) |
| Text body | `--text-secondary` (#4A4A4A) |
| Text caption / label | `--text-muted` (#A8A8A8) |
| Accent / CTA / Logo | `--gold` (#C7A35D) |
| Eyebrow / Tag | `--text-gold` (#C7A35D) |
| Border nhẹ | `--border` (#E4DDD2) |
| Section xen kẽ | `--bg-beige` (#EDE8DF) |

### 1.5 Quy tắc dùng màu trên nền tối (DARK section — điểm nhấn)

Chỉ dùng cho: Features bar, Hero overlay, Section highlight, Footer background.

| Yếu tố | Màu sử dụng |
|---|---|
| Dark section bg | `--bg-dark` (#2B2B2B) |
| Text trên dark | `--text-on-dark` (#F5F2EC) |
| Accent trên dark | `--gold` (#C7A35D) |
| Text muted trên dark | `rgba(245,242,236,0.5)` |
| Border trên dark | `rgba(199,163,93,0.25)` |

---

## 2. Typography

### 2.1 Font chính thức

| Font | Vai trò | Weights | Google Fonts |
|---|---|---|---|
| **Cormorant Garamond** | Tiêu đề, Display, Logo text | 300, 400, 500, **600**, 700, *Italic* | ✅ Có sẵn |
| **Helvetica Neue** | Body, UI, Labels, Button | 300, 400, 500, **600**, 700 | ⚠️ Fallback: Inter |

```css
/* Import trong <head> */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap');

/* Font variables */
:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'Helvetica Neue', 'Inter', -apple-system, sans-serif;
}
```

> **Lưu ý:** Helvetica Neue là system font (không có trên Google Fonts). Fallback là `Inter` — sử dụng Inter khi deploy web để đồng nhất.

### 2.2 Type Scale (từ Brand Guidelines)

| Level | Size (px) | Font | Weight | Letter-spacing | Dùng cho |
|---|---|---|---|---|---|
| **H1** | 48px | Cormorant Garamond | 600 | -0.02em | Tiêu đề trang chính |
| **H2** | 32px | Cormorant Garamond | 600 | -0.01em | Tiêu đề phụ, section |
| **H3** | 20px | Cormorant Garamond | 500 | 0 | Tiêu đề card, callout |
| **H4** | 16px | Helvetica Neue / Inter | 600 | 0 | Tiêu đề nhỏ, sidebar |
| **Paragraph** | 16px | Helvetica Neue / Inter | 400 | 0 | Nội dung chính |
| **Caption** | 12px | Helvetica Neue / Inter | 400–600 | +0.08em | Chú thích, label trên |

```css
/* CSS Typography Tokens */
:root {
  --font-size-h1:   48px;
  --font-size-h2:   32px;
  --font-size-h3:   20px;
  --font-size-h4:   16px;
  --font-size-body: 16px;
  --font-size-sm:   14px;
  --font-size-cap:  12px;

  --line-height-display: 1.15;
  --line-height-heading: 1.25;
  --line-height-body:    1.65;
  --line-height-tight:   1.1;
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, var(--font-size-h1));
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: var(--line-height-display);
  color: var(--text-primary);
}

h2 {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.5vw, var(--font-size-h2));
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: var(--line-height-heading);
}

h3 {
  font-family: var(--font-display);
  font-size: var(--font-size-h3);
  font-weight: 500;
  line-height: var(--line-height-heading);
}

.eyebrow, .caption-label {
  font-family: var(--font-body);
  font-size: var(--font-size-cap);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-gold);  /* Golden Sand */
}

p, .body-text {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--text-secondary);
}
```

### 2.3 Quy tắc typography

- **H1 luôn dùng Cormorant Garamond** — không dùng sans-serif cho display headline
- **Eyebrow/Caption:** UPPERCASE + letter-spacing rộng + màu gold (#C7A35D)
- **Không** mix quá 2 font trong 1 component
- **Italic** của Cormorant Garamond: dùng cho tagline, quote, nhấn mạnh tinh tế
- Body text tối thiểu 14px, không nhỏ hơn trên mobile

---

## 3. Logo

### 3.1 Mô tả

Biểu tượng hình lục giác tích hợp chữ "H" và "D", được thiết kế theo grid system cân bằng. Logo tồn tại dưới 2 dạng: **Full Logo** (icon + text) và **Icon Only** (symbol).

### 3.2 Tỉ lệ & khoảng trống

```
Tổng chiều cao logo: 19x
├─ Icon width:  12.5x
├─ Gap giữa:    2x
└─ Text width:  23x

Safe zone (clearance): 6x trên mọi cạnh
```

### 3.3 Phiên bản logo theo nền

| Nền | Logo version | Khi dùng |
|---|---|---|
| **Ivory Mist / Trắng** | Dark icon + Dark text | Trang web (default), letterhead |
| **Charcoal / Tối** | Golden icon + Golden text | Hero overlay, dark section, banner |
| **Golden Sand** | Dark icon + Dark text | Poster, quảng cáo nền vàng |
| **Hình ảnh** | White âm bản + overlay | Khi đặt logo trên ảnh |

### 3.4 Quy tắc BẮT BUỘC — Logo

✅ **ĐƯỢC PHÉP:**
- Logo gốc (golden + dark) trên nền sáng
- Logo âm bản (trắng) trên nền tối / ảnh
- Logo đơn sắc trên vật liệu đặc biệt
- Logo đen trắng khi in đen trắng

❌ **KHÔNG ĐƯỢC:**
- Xô nghiêng (skew/italic) logo
- Bóp ngang / kéo dài tỉ lệ
- Đổi màu sang bất kỳ màu nào khác
- Đặt lệch biểu tượng và chữ
- Thay đổi tương quan kích thước icon/text
- Thêm shadow, outline, gradient vào logo
- Đặt logo trên nền có độ tương phản thấp

---

## 4. Spacing & Layout

### 4.1 Grid (8px base)

```css
:root {
  --space-1:   4px;    /* 0.5x */
  --space-2:   8px;    /* 1x */
  --space-3:  12px;    /* 1.5x */
  --space-4:  16px;    /* 2x */
  --space-5:  20px;    /* 2.5x */
  --space-6:  24px;    /* 3x */
  --space-8:  32px;    /* 4x */
  --space-10: 40px;    /* 5x */
  --space-12: 48px;    /* 6x */
  --space-16: 64px;    /* 8x */
  --space-20: 80px;    /* 10x */
  --space-24: 96px;    /* 12x */
  --space-30: 120px;   /* 15x */
}
```

### 4.2 Breakpoints

```css
/* Mobile first */
--bp-sm:  480px;
--bp-md:  768px;
--bp-lg:  1024px;
--bp-xl:  1280px;
--bp-2xl: 1440px;
```

### 4.3 Container max-width

```css
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--space-12);  /* 48px */
}

@media (max-width: 1024px) {
  .container { padding: 0 var(--space-8); }  /* 32px */
}
@media (max-width: 768px) {
  .container { padding: 0 var(--space-5); }  /* 20px */
}
```

### 4.4 Section spacing

| Section | Padding vertical |
|---|---|
| Hero / Banner | 0 (full bleed) |
| Section thường | 80px top/bottom |
| Section compact | 48px top/bottom |
| Card padding | 20–24px |
| Navbar height | 72px |

---

## 5. Components UI

### 5.1 Header / Navbar

```
Background:     rgba(245,242,236,0.95)  [semi-transparent Ivory Mist]
Backdrop:       blur(12px)
Border-bottom:  1px solid var(--border) — chỉ khi scroll
Height:         72px desktop / 64px mobile
Logo:           Dark version (icon tối + text tối) trên nền sáng
Nav links:      var(--text-secondary) → hover: var(--text-primary)
Active link:    Gold underline (#C7A35D) scaleX animation
Position:       Fixed, z-index: 100
```

### 5.2 Buttons

```css
/* Primary Button — Golden Sand */
.btn-primary {
  background: var(--gold);
  color: var(--bg-dark);          /* Dark text on gold */
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 14px 32px;
  border-radius: 4px;
  border: none;
  transition: background 0.25s ease, transform 0.2s ease;
}
.btn-primary:hover {
  background: var(--gold-dark);
  transform: translateY(-2px);
}

/* Secondary Button — Outlined */
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1.5px solid var(--text-primary);
  /* same padding/typography as primary */
}
.btn-secondary:hover {
  background: var(--text-primary);
  color: var(--text-on-dark);
}

/* Ghost Button — on dark bg */
.btn-ghost-dark {
  background: transparent;
  color: var(--text-on-dark);
  border: 1.5px solid rgba(245,242,236,0.6);
}
.btn-ghost-dark:hover {
  border-color: var(--text-on-dark);
  background: rgba(245,242,236,0.08);
}

/* CTA Button — White on dark section */
.btn-white {
  background: var(--bg-surface);
  color: var(--text-primary);
}
.btn-white:hover {
  background: var(--bg-page);
}
```

### 5.3 Cards / Product Cards

```
Background:     #FFFFFF
Border-radius:  10–12px
Shadow:         var(--shadow-sm)
Shadow hover:   var(--shadow-lg)
Transform hover: translateY(-5px)
Image aspect:   4/5 (portrait)
Image bg:       var(--bg-beige)
Name font:      Cormorant Garamond, 500
Price font:     Inter/Helvetica, 600
Badge (sale):   bg var(--bg-dark), text white
Badge (new):    bg var(--gold), text white
Swatch active:  outline var(--text-primary)
```

### 5.4 Sections — Phân chia nền

```
Pattern xen kẽ trên trang (light theme dominant):

Section 1: bg var(--bg-page)   [Ivory Mist]
Section 2: bg var(--bg-surface) [White]
Section 3: bg var(--bg-beige)  [Light Beige — khi cần nhấn mạnh]
Section D: bg var(--bg-dark)   [Charcoal — dark accent, dùng thưa]

Tỉ lệ sáng/tối: ~80% sáng / ~20% tối
```

### 5.5 Forms & Inputs

```css
input, select, textarea {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 10px 14px;
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-primary);
  transition: border-color 0.2s;
}
input:focus {
  border-color: var(--gold);
  outline: none;
}
input::placeholder {
  color: var(--text-muted);
}
```

### 5.6 Dividers / Separators

```
Horizontal rule: 1px, color var(--border)
Gold accent line: 2px, color var(--gold), width 40–60px
                  Dùng dưới eyebrow label để tạo điểm nhấn
```

### 5.7 Footer

```
Light Footer (default):
  Background: var(--bg-surface)
  Border-top: 1px solid var(--border)
  Text:       var(--text-secondary)
  Links hover: var(--gold)

Dark Footer (alternative):
  Background: var(--bg-dark)
  Text:       var(--text-on-dark)
  Links hover: var(--gold)
```

---

## 6. Hình ảnh & Visual

### 6.1 Tỉ lệ ảnh chuẩn

| Loại ảnh | Tỉ lệ | Ghi chú |
|---|---|---|
| Product card | 4:5 | Portrait, object-cover |
| Hero banner | 16:9 hoặc full-bleed | object-position: center |
| Category card | 3:4 | Portrait với label overlay |
| Split section | 1:1 hoặc tự do | 50/50 layout |
| Review avatar | 1:1 | Hình tròn |

### 6.2 Overlay trên ảnh

```css
/* Dark overlay cho hero */
.hero-overlay {
  background: linear-gradient(
    105deg,
    rgba(43,43,43,0.55) 0%,
    rgba(43,43,43,0.25) 50%,
    transparent 80%
  );
}

/* Logo trên ảnh: phải dùng âm bản (white) */
/* Có thể thêm dark block phía sau logo */
.logo-on-image {
  background: rgba(43,43,43,0.75);
  padding: 12px 20px;
  border-radius: 4px;
}
```

### 6.3 Tone ảnh phù hợp thương hiệu

- Ảnh nội thất: warm-toned, ánh sáng tự nhiên
- Ảnh bất động sản: sáng, clean, architectural
- Không dùng ảnh quá sặc sỡ hoặc cold-toned
- Ưu tiên tông màu kem, ivory, nâu gỗ, vàng tự nhiên

---

## 7. Motion & Animation

### 7.1 Tokens

```css
:root {
  --motion-fast:   0.15s;
  --motion-base:   0.25s;
  --motion-slow:   0.45s;
  --ease-out:      cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-inout:    cubic-bezier(0.37, 0, 0.63, 1);
}
```

### 7.2 Animation inventory

| Element | Effect | Duration | Easing |
|---|---|---|---|
| Page nav | Scroll compact | 0.3s | ease |
| Product card hover | Lift -5px + shadow | 0.25s | ease-out |
| Card image hover | Scale 1.05 | 0.5s | ease-out |
| Scroll entrance | Fade up (Y: 30px) | 0.6s | --ease-out |
| Stagger cards | 0.07s delay each | — | — |
| CTA hover | translateY(-2px) | 0.2s | --ease-spring |
| Gold underline nav | scaleX 0→1 | 0.25s | --ease-spring |
| Wishlist click | Scale burst | 0.3s | elastic.out |
| Toast | Slide up + fade | 0.28s | --ease-out |

### 7.3 Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Dark Section (điểm nhấn — dùng thưa)

Dark sections chỉ chiếm ~20% diện tích trang. Dùng cho:
- Features bar / Benefit strip
- Hero overlay text
- CTA section nổi bật
- Footer (optional)

```css
.section-dark {
  background: var(--bg-dark);     /* #2B2B2B */
  color: var(--text-on-dark);     /* #F5F2EC */
}

.section-dark h2 {
  color: var(--bg-page);          /* Ivory */
}

.section-dark .eyebrow {
  color: var(--gold);             /* Golden Sand */
}

.section-dark .border-elem {
  border-color: rgba(199,163,93,0.25);
}
```

---

## 9. QUY TẮC KHÔNG ĐƯỢC VI PHẠM

### 9.1 Màu sắc
- ❌ Không dùng màu ngoài bảng màu chính thức (5 màu)
- ❌ Không dùng màu xanh, đỏ, tím làm accent
- ❌ Không đặt text vàng (#C7A35D) trên nền trắng thuần (contrast thấp) — chỉ dùng cho heading lớn hoặc eyebrow
- ❌ Không dùng Charcoal Black làm nền trang mặc định (chỉ là dark section)

### 9.2 Typography
- ❌ Không dùng font khác ngoài Cormorant Garamond + Helvetica Neue/Inter
- ❌ Không dùng font size nhỏ hơn 12px
- ❌ Không dùng Cormorant Garamond cho body text dài (chỉ tiêu đề)
- ❌ Không in hoa toàn bộ heading Cormorant Garamond (mất tính sang trọng)

### 9.3 Logo
- ❌ Không xô nghiêng / scale lệch tỉ lệ
- ❌ Không đổi màu logo sang màu khác
- ❌ Không đặt logo trực tiếp trên ảnh mà không có overlay/block nền
- ❌ Không vi phạm clearance zone 6x

### 9.4 Layout
- ❌ Không dùng quá 3 cột trên mobile
- ❌ Không để section tối liền nhau (cần xen kẽ section sáng)
- ❌ Không dùng màu sắc loè loẹt, gradient không liên quan brand

---

## 10. Light UI Checklist — kiểm tra trước mỗi commit

```
□ Background trang là Ivory Mist (#F5F2EC) không?
□ Cards dùng nền trắng (#FFFFFF) không?
□ Accent color dùng đúng Golden Sand (#C7A35D) không?
□ Headline dùng Cormorant Garamond không?
□ Body text dùng Helvetica Neue / Inter không?
□ Logo dùng đúng phiên bản (dark trên sáng, light trên tối)?
□ Dark section ≤ 20% diện tích trang không?
□ Mọi interactive state có hover/focus rõ ràng không?
□ Text có đủ contrast (WCAG AA) không?
□ Mobile responsive OK không?
```

---

## 11. Quick Reference — CSS Variables copy-paste

```css
/* Dán vào :root {} của style.css */

/* Colors */
--gold:           #C7A35D;
--gold-dark:      #A8804A;
--gold-light:     #E6D5A8;
--bg-page:        #F5F2EC;
--bg-surface:     #FFFFFF;
--bg-beige:       #EDE8DF;
--bg-dark:        #2B2B2B;
--text-primary:   #2B2B2B;
--text-secondary: #4A4A4A;
--text-muted:     #A8A8A8;
--text-on-dark:   #F5F2EC;
--text-gold:      #C7A35D;
--border:         #E4DDD2;

/* Typography */
--font-display:   'Cormorant Garamond', Georgia, serif;
--font-body:      'Helvetica Neue', 'Inter', sans-serif;

/* Spacing */
--sp-4: 4px; --sp-8: 8px; --sp-12: 12px; --sp-16: 16px;
--sp-20: 20px; --sp-24: 24px; --sp-32: 32px; --sp-48: 48px;
--sp-64: 64px; --sp-80: 80px;

/* Motion */
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

*© 2026 Hoa Đô — Tài liệu nội bộ, không phát tán ra ngoài.*
