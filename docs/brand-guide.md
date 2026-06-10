# Nội thất Hoa Đô — Brand Guide
# Skill applied: Frontend Design (distinctive, non-generic aesthetics)

## Brand DNA

**Positioning:** Luxury Vietnamese furniture — tinh tế, bền vững, đậm chất Việt  
**Tone:** Ấm áp, đáng tin cậy, tinh tế — KHÔNG lạnh lùng, KHÔNG generic  
**Aesthetic:** Warm luxury minimalism — gần với Japandi nhưng mang hơi thở Việt Nam

## What we AVOID (Frontend Design anti-patterns)
- ❌ Generic purple/blue gradients
- ❌ System fonts (Inter alone without contrast)
- ❌ Predictable card-with-shadow grid
- ❌ Generic "Add to Cart" green buttons
- ❌ Cookie-cutter hero with centered text
- ❌ Flat white backgrounds everywhere

## What we DO (Frontend Design principles)
- ✅ Cormorant Garamond cho headlines — luxury serif với character
- ✅ Gold accent #C9A86C — không phải vàng chói, là vàng đất
- ✅ Warm ivory #FAF8F5 background — không pure white
- ✅ Asymmetric layout sections — hero text left-aligned, promo text right-aligned
- ✅ Subtle linen texture overlay trên hero
- ✅ Serif + Sans pairing với clear hierarchy
- ✅ Dark sections xen kẽ (features bar, marquee) để tạo rhythm
- ✅ Product images với aspect-ratio 4:5 (portrait) — luxury feel
- ✅ Micro-copy uppercase với letter-spacing rộng cho labels

## Color Usage Rules
- Gold (#C9A86C): CTAs, badges, accents, hover states
- Dark (#1C1916): Headings, nav, dark sections
- Ivory (#FAF8F5): Page background
- White (#FFFFFF): Card surfaces
- Terracotta (#C4714A): Sale badges, urgent elements

## Typography Hierarchy
```
Display (hero): Cormorant Garamond 700, 64-80px
H1: Cormorant Garamond 600, 48px
H2: Cormorant Garamond 600, 36px  
H3: Cormorant Garamond 500, 22px (product names)
Body: DM Sans 400, 15px
Label: DM Sans 700, 11px, uppercase, 0.12em tracking
Price: DM Sans 600, 15px
```

## Button System
```
Primary: bg-dark, text-white, radius-4px, padding 14px 32px
          hover: bg-gold, transform -2px
Outline: border-dark, text-dark
          hover: bg-dark, text-white
Ghost: text-gold, underline
          hover: text-gold-dark
```

## Spacing Philosophy
- Generous whitespace — luxury sản phẩm cần room to breathe
- Section padding: 64-80px vertical
- Product grid gap: 24px
- Card padding: 16-20px

## Image Treatment
- Hero: full-bleed, object-cover
- Products: aspect-ratio 4/5, object-cover, bg-beige
- Category: aspect-ratio 3/4, Ken Burns zoom on hover
- Promo: full-bleed với dark overlay gradient
