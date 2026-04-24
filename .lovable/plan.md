
# BrandFlix — Single-Page Website

A production-ready, fully responsive dark-themed landing page for the Roman creative agency, built to spec.

## Design System Setup
- Add Google Fonts (Barlow Condensed 400/600/700/900 + DM Sans 400/500/600/700) via `index.html`
- Define full color palette as HSL CSS variables in `index.css`: bg `#0A0A0A`, signal yellow `#FFF300`, electric magenta `#FF0090`, surface `#1E1E1E`, border `#2E2E2E`, light `#F5F5F5`, plus text tokens
- Extend `tailwind.config.ts` with brand colors, font families (`font-display` Barlow Condensed, `font-body` DM Sans), and custom keyframes (fade-up, ticker-left, ticker-right, magenta-pulse)
- Set page background to `#0A0A0A` and default font to DM Sans
- Sharp corners everywhere (no border-radius on buttons/cards)

## Page Structure (`src/pages/Index.tsx`)
Single page assembled from modular section components:

1. **Navbar** — fixed, 68px → 56px on scroll, blur backdrop, logo "Brand**Flix**", center anchor links, yellow CTA "Parliamoci →", hamburger + fullscreen overlay menu on mobile
2. **Hero** — 100vh, two-column 60/40, grid overlay + radial yellow glow, magenta pulsing dot overline, 3-line stacked H1 with staggered load animation, two CTAs, right column with yellow "Play your Business." pill + 2 stat cards, bottom scroll indicator strip
3. **Ticker 1** — left-scrolling infinite marquee (26s loop) with brand services separated by yellow ◆ diamonds
4. **Chi siamo** (`#about`) — split dark/light columns with 3px yellow divider, stats with magenta `%` accent
5. **Ticker 2** — reverse direction
6. **Portfolio** (`#portfolio`) — white bg, 6 full-width project rows with number/info/arrow grid, hover reveals 3px yellow left border
7. **Valori** — 2x2 hairline grid of value cards on dark, hover reveals yellow corner triangle (CSS clip)
8. **Servizi** (`#servizi`) — light bg, left tab list + sticky right panel with switching content, mobile becomes accordion
9. **Processo** — white bg, 4 step rows + sticky right column with dark manifesto box and yellow CTA box
10. **FAQ** — dark bg, accordion (one open at a time, animated +/× icon) + sticky yellow CTA box
11. **Insights/Blog** — light bg, 3-card hairline grid with placeholder thumbnails and magenta dot meta
12. **CTA + Form** (`#contatti`) — dark bg, large yellow accent headline + full contact form with controlled state, inline success state on submit
13. **Footer** — 4-column dark, with social square icon row in bottom bar
14. **WhatsApp floating button** — fixed bottom-right, green circle with SVG icon, hover scale

## Interactivity & Animation
- IntersectionObserver hook for fade-up-on-scroll across all sections (threshold 8%, translateY 28px → 0, 0.65s ease)
- Scroll listener for navbar height shrink
- Smooth-scroll for all internal anchor links
- Hero H1 staggered entrance on mount
- Marquee animations via Tailwind keyframes (CSS-only, GPU-friendly)
- Service tabs: React state switches sticky panel content
- FAQ accordion: single-open state with animated max-height
- Form: controlled inputs, on submit shows "Richiesta inviata ✓" state (no backend wiring — pure UI; can be hooked to email service later)
- Mobile menu: state-controlled fullscreen overlay

## Responsive
- Mobile-first Tailwind classes, breakpoints at 768px and 1024px
- Two-column sections stack on tablet/mobile
- Hero stat cards go horizontal on tablet, stack on mobile
- Portfolio hides arrow column on mobile, shrinks number column
- Sticky right columns become static on mobile
- Hamburger menu under 768px
- WhatsApp button shrinks to 46px on mobile
- All headlines use `clamp()` for fluid scaling

## File Organization
- `src/components/sections/` — one file per section (Navbar, Hero, Ticker, About, Portfolio, Valori, Servizi, Processo, FAQ, Insights, Contact, Footer, WhatsAppButton)
- `src/hooks/use-scroll-reveal.ts` — IntersectionObserver hook
- `src/hooks/use-scroll-position.ts` — for navbar shrink
- All copy, stats, portfolio items, services, FAQs, blog cards stored as typed data arrays at the top of each section file for easy editing
