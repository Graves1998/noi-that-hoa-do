---
name: Nội thất Hoa Đô
description: Luxury Vietnamese furniture — where modern minimalism meets artisan craft.
colors:
  golden-sand: "#C7A35D"
  golden-sand-dark: "#A8804A"
  golden-sand-light: "#E6D5A8"
  ivory-mist: "#F5F2EC"
  charcoal: "#2B2B2B"
  charcoal-hover: "#3A3A3A"
  soft-ink: "#4A4A4A"
  neutral-gray: "#A8A8A8"
  warm-linen: "#EDE8DF"
  bone-border: "#E4DDD2"
  surface-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2rem, 4.5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.8vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.2rem"
    fontWeight: 500
    lineHeight: 1.25
  body:
    fontFamily: "Inter, Helvetica Neue, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, Helvetica Neue, -apple-system, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  pill: "40px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.golden-sand}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.sm}"
    padding: "13px 28px"
  button-primary-hover:
    backgroundColor: "{colors.golden-sand-dark}"
  button-dark:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.ivory-mist}"
    rounded: "{rounded.sm}"
    padding: "13px 28px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.sm}"
    padding: "13px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.soft-ink}"
    rounded: "{rounded.sm}"
    padding: "13px 28px"
  card-product:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
    padding: "0"
  input-default:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.sm}"
    padding: "11px 16px"
---

# Design System: Nội thất Hoa Đô

## 1. Overview

**Creative North Star: "The Quiet Showroom"**

Hoa Đô's digital presence is a curated showroom where silence speaks. Every surface, every transition, every typographic choice serves one purpose: to let the furniture command the room. The interface recedes — generous whitespace, muted tones, precise alignments — so the product photography can do what no UI element can: make someone want to touch a screen.

The system rejects noise. No promotional banners fighting for attention (this is not Shopee). No identical card grids filling space (this is not IKEA). No gradient-text hero metrics (this is not a SaaS pitch deck). Hoa Đô's brand is carried by restraint: the gold accent appears sparingly, the typography whispers authority, and the page rhythm mimics the experience of walking through a physical showroom — expansive moments, intimate pauses, deliberate reveals.

**Key Characteristics:**
- Photography-first: UI exists to frame, not to compete
- Restrained color: warm neutrals + one disciplined accent
- Serif + sans pairing for editorial authority
- Scroll-driven choreography with GSAP, never gratuitous
- Dark sections as contrast punctuation, not default

## 2. Colors: The Golden Sand Palette

A restrained palette: warm neutrals carry the surface, a single gold accent provides the only chromatic voice. The gold is used with discipline — it marks what matters and nothing else.

### Primary
- **Golden Sand** (#C7A35D): The brand's signature. Buttons, active states, accent lines, hover highlights. Used on ≤10% of any given screen.
- **Golden Sand Dark** (#A8804A): Hover and pressed states for primary interactive elements.
- **Golden Sand Light** (#E6D5A8): Tints for subtle backgrounds, selection highlights.

### Neutral
- **Ivory Mist** (#F5F2EC): Page default background. Warm enough to feel lived-in, neutral enough to not compete with product photography.
- **Warm Linen** (#EDE8DF): Alternating section backgrounds, subtle differentiation.
- **Surface White** (#FFFFFF): Cards, modals, inputs — the elevated layer.
- **Charcoal** (#2B2B2B): Primary text, dark sections, dark buttons. The system's anchor.
- **Soft Ink** (#4A4A4A): Secondary body text. Readable without being heavy.
- **Neutral Gray** (#A8A8A8): Muted labels, placeholders, disabled states.
- **Bone Border** (#E4DDD2): Dividers, card borders, input strokes.

### Named Rules
**The One Voice Rule.** Golden Sand is the only chromatic accent. No secondary color, no tertiary color. If a new element needs color, it uses Golden Sand or a transparency of it. Introducing a second accent breaks the showroom's quiet authority.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia fallback)
**Body Font:** Inter (with Helvetica Neue, system sans fallback)

**Character:** The pairing is editorial and deliberate — a refined serif for moments of authority (headings, hero text, product names), a clean sans for everything that needs to be read quickly (body, labels, navigation). The contrast axis is clear: serif = voice, sans = utility.

### Hierarchy
- **Display** (600, clamp(2rem, 4.5vw, 3rem), 1.15): Page heroes, section headings. The showroom's signage.
- **Headline** (600, clamp(1.5rem, 2.8vw, 2rem), 1.15): Sub-section headings, product collection titles.
- **Title** (500, 1.2rem, 1.25): Card titles, product names, minor headings.
- **Body** (400, 15px, 1.65): All running text. Capped at 65–75ch line length.
- **Label** (700, 0.68rem, 0.14em tracking, uppercase): Eyebrows, category tags, navigation links, metadata. Small and precise.

### Named Rules
**The Quiet Authority Rule.** Display headings never shout. Maximum clamp ceiling is 5rem for hero-scale text. Letter-spacing stays at -0.015em — tight enough to feel designed, loose enough that letters never touch.

## 4. Elevation

Surfaces carry subtle ambient shadows at rest — the showroom has depth even when nothing is being touched. Shadows deepen on interaction (hover lifts cards, focus rings appear) but never dominate. The system uses four shadow levels plus one gold-tinted accent shadow.

### Shadow Vocabulary
- **Extra Small** (`0 1px 3px rgba(43,43,43,.05)`): Default resting state for flat elements.
- **Small** (`0 2px 8px rgba(43,43,43,.07)`): Cards, elevated surfaces at rest.
- **Medium** (`0 4px 20px rgba(43,43,43,.10)`): Hover states, focused elements, dropdowns.
- **Large** (`0 12px 40px rgba(43,43,43,.14)`): Modals, lifted cards on hover.
- **Gold Accent** (`0 4px 20px rgba(199,163,93,.20)`): Primary buttons at rest. The only tinted shadow in the system.

### Named Rules
**The Warm Lift Rule.** Shadows use the Charcoal tone (43,43,43), never pure black. This keeps shadows warm and consistent with the Ivory Mist surface. The gold-tinted shadow is reserved for primary buttons — nowhere else.

## 5. Components

### Buttons
- **Shape:** Sharp corners (4px radius). Buttons are precise, not friendly.
- **Primary (Golden Sand):** Gold background, Charcoal text, gold accent shadow. Hover: darkens to #A8804A, lifts 2px, shadow intensifies. The only component allowed a tinted shadow.
- **Dark (Charcoal):** Dark background, Ivory text. Hover: lightens to #3A3A3A, lifts 2px. For secondary CTAs.
- **Outline:** Transparent background, 1.5px Charcoal border. Hover: fills Charcoal, inverts text to Ivory. For tertiary actions.
- **Ghost:** Transparent, 1.5px border in muted tone. Hover: border shifts to gold. For dark backgrounds.
- **All variants:** 0.75rem uppercase, 600 weight, 0.09em tracking. Active state: scale(0.98). Arrow icon (14px stroke) included when needed.

### Cards / Containers
- **Product Card:** White background, 12px radius, small ambient shadow at rest. Hover: lifts 6px, shadow deepens to Large. Image area: 4/5 aspect ratio with overflow hidden. Hover triggers 1.06x image scale with 0.55s ease. Name text shifts to gold-dark on hover.
- **Blog Card:** Full-bleed image with gradient overlay (bottom-up, rgba(0,0,0,0.6) → transparent). Category badge with backdrop-filter blur(8px). 4/5 aspect ratio. Hover: image scales 1.05x.

### Inputs / Fields
- **Style:** White background, 1px Bone Border stroke, 4px radius.
- **Focus:** Border shifts to Golden Sand. No glow, no ring — the gold line is enough.
- **Placeholder:** Neutral Gray (#A8A8A8).

### Navigation
- **Desktop:** Uppercase, 0.75rem, 500 weight, 0.05em tracking. Underline appears on hover/active via scaleX transform with spring easing. Color shifts from Soft Ink to Charcoal.
- **Mobile:** Full-screen overlay, Cormorant Garamond at 1.8rem, slide-in from right. Links separated by 1px border.
- **Header:** Fixed, 72px height, Ivory Mist background with 12px backdrop blur. Border appears on scroll.

### Marquee Bar
- **Dark variant:** Charcoal background, muted Ivory text at 0.62rem uppercase. Gold star separators. Continuous horizontal scroll at 22s. Pauses on hover. Provides rhythm between sections.

## 6. Do's and Don'ts

### Do:
- **Do** let product photography fill at least 40% of any homepage viewport. The showroom is about the furniture.
- **Do** use Golden Sand exclusively for interactive accents (buttons, hover states, active indicators). Its rarity is the system's discipline.
- **Do** vary section spacing for rhythm. Not every section gets the same padding — some breathe (80px+), some are intimate (48px).
- **Do** use GSAP ScrollTrigger for entrance animations. Each reveal should fit what it reveals: parallax for images, fadeUp for text, slideIn for side elements.
- **Do** include `@media (prefers-reduced-motion: reduce)` alternatives for every animation.
- **Do** maintain ≥4.5:1 contrast ratio for all body text. Soft Ink (#4A4A4A) on Ivory Mist (#F5F2EC) is the floor, not the ceiling.

### Don't:
- **Don't** add a second accent color. Golden Sand is the only chromatic voice. Introducing blue, red, or green breaks the One Voice Rule.
- **Don't** use identical card grids as the default layout. Cards are for products; other content needs different structure. (Anti-reference: IKEA catalog layout.)
- **Don't** use gradient text, glassmorphism cards, or hero-metric templates. (Anti-reference: SaaS landing pages.)
- **Don't** add promotional banners, flash sale ribbons, or discount-heavy layouts. (Anti-reference: Shopee/Lazada marketplace noise.)
- **Don't** use side-stripe borders (border-left > 1px as colored accent). Rewrite with background tints or leading icons.
- **Don't** put numbered section markers (01 / 02 / 03) on every section. Numbers earn their place only in actual sequences.
- **Don't** apply eyebrow kickers above every section heading. One deliberate eyebrow is voice; eyebrows everywhere is scaffolding.
- **Don't** exceed 5rem for hero heading clamp max. The page should feel designed, not shouted.
