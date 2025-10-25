# TODO List for Al Namariq Group of Companies Frontend Development

## 1. Project Initialization
- [x] Initialize Next.js 14 project with App Router and TypeScript
- [x] Set up basic folder structure (app/, components/, lib/, public/, styles/)

## 2. Dependencies and Configuration
- [x] Install Tailwind CSS, shadcn/ui, next-i18next, and other required packages
- [x] Configure Tailwind CSS and shadcn/ui
- [x] Set up next-i18next for EN/AR with RTL support
- [x] Configure next.config.js for i18n, images, and optimizations

## 3. Internationalization Setup
- [x] Create locale files for English and Arabic (public/locales/)
- [x] Implement language switcher component
- [x] Ensure RTL support in layout and components

## 4. Global Layout and Components
- [x] Create root layout (app/layout.tsx) with providers
- [x] Implement Header component (sticky, mega menu, language switcher)
- [x] Implement Footer component (contact info, links, social)
- [x] Add global styles and theme configuration

## 4.1 Our Divisions Section
- [x] Create Our Divisions page (app/our-divisions/page.tsx)
- [x] Add navigation link for Our Divisions after About Us and before Products in Header component
- [x] Update hero section description for consistency

## 5. Home Page (/)
- [x] Basic home page with welcome message and translations
- [x] Build Hero slider with CTA
- [x] Add About teaser section
- [x] Implement Product spotlight (categories + featured products)
- [x] Create Services highlights cards
- [x] Add Specialized Materials teaser grid
- [x] Implement Clients strip (scrolling logos)
- [x] Build Testimonials carousel
- [x] Add CTA band for quote/WhatsApp

## 6. About Us Page (/about)
- [x] Basic about page with placeholder content
- [x] Create Hero section (image/video)
- [x] Add Mission, Vision, Values sections
- [x] Implement Timeline component (responsive stepped layout)
- [x] Build Team grid with department filters
- [x] Add Certifications gallery
- [x] Update hero section description for consistency

## 7. Products Pages (/products, /products/[slug])
- [x] Basic products page with placeholder content
- [x] Build Products list with faceted filters (category, search, etc.)
- [x] Implement Product cards with quick attributes
- [x] Create Product detail page with gallery, tabs (Overview, Specs, Downloads)
- [x] Add sticky CTA (Enquire, WhatsApp)
- [x] Implement related products section

## 8. Services Pages (/services, /services/[slug])
- [x] Basic services page with placeholder content
- [x] Create Services list/grid with icons
- [x] Build Service detail page with content, process steps, FAQs, CTA

## 9. Specialized Materials Pages (/specialized-materials, /specialized-materials/[slug])
- [x] Basic specialized materials page with placeholder content
- [x] Implement grid similar to Products (scoped to specialized materials)
- [x] Create detail page with applications, certifications, case studies

## 10. Contact Us Page (/contact)
- [x] Basic contact page with functional form and validation
- [x] Add Map integration (Google Maps)
- [x] Include contact details, business hours
- [x] Integrate form submission to API (email and WhatsApp)
- [x] Update hero section description for consistency

## 11. Utility Pages
- [x] Create Downloads page (/downloads)
- [x] Add Privacy Policy and Terms pages
- [x] Implement sitemap.xml and robots.txt

## 12. Reusable Components
- [x] LanguageSwitcher component
- [x] Breadcrumbs component
- [x] Add breadcrumbs to About Us page
- [x] Add breadcrumbs to Products page
- [x] Add breadcrumbs to Services page
- [x] Add breadcrumbs to Our Divisions page
- [x] Test breadcrumbs functionality (verified rendering and navigation on /about, /products, /services, and /our-divisions pages)
- [x] Card components (Product, Service, Material)
- [x] Filters panel (accordion)
- [x] Tabs, Accordion (FAQs), Modal/Drawer (Enquiry)
- [x] Carousel components (Hero, Testimonials)
- [x] Badge for certifications
- [x] Form components with validation and ARIA

## 13. Integrations and Features
- [x] Set up API utilities for CMS integration (products, services, leads)
- [x] Implement lead form submission (email via SMTP, WhatsApp webhook)
- [ ] Add Analytics (GA4, Meta Pixel) with consent banner
- [ ] Integrate reCAPTCHA v3 for forms
- [ ] Add SEO meta tags, schema.org, canonical tags, hreflang

## 14. Performance and Accessibility
- [ ] Optimize images with Next.js Image (AVIF/WebP, responsive)
- [ ] Implement lazy loading and preloading
- [ ] Ensure WCAG 2.2 AA compliance (focus states, keyboard nav, contrast)
- [ ] Add error boundaries and 404/500 pages

## 15. Testing and Deployment Prep
- [ ] Set up environment variables (.env.local)
- [ ] Test locally with npm run dev
- [ ] Run Lighthouse for performance checks
- [ ] Prepare for Vercel deployment
- [ ] Add README and documentation

## 16. Make it Attractive and Amazing
- [ ] **Animations & Micro-interactions**
  - [ ] Add smooth page transitions and loading animations
  - [x] Implement hover effects for cards, buttons, and navigation
  - [ ] Add scroll-triggered animations for sections
  - [ ] Create interactive elements (animated counters, progress bars)
  - [ ] Add micro-interactions for form submissions and button clicks
- [ ] **Mobile-first Responsive Design**
  - [ ] Audit all components for mobile responsiveness
  - [ ] Optimize touch targets (minimum 44px)
  - [ ] Improve mobile navigation UX (hamburger menu, swipe gestures)
  - [ ] Test and fix responsive layouts on various screen sizes
  - [ ] Ensure proper spacing and typography scaling
- [ ] **Visual Enhancements**
  - [ ] Add modern gradients and color schemes
  - [ ] Implement advanced shadow effects and depth
  - [ ] Upgrade iconography with better SVG icons
  - [ ] Add background patterns and textures
  - [ ] Implement glassmorphism effects where appropriate
  - [ ] Enhance typography with better font weights and spacing
- [ ] **Performance & UX Optimization**
  - [ ] Implement lazy loading for images and components
  - [ ] Add smooth scrolling behavior
  - [ ] Optimize bundle size and loading times
  - [ ] Add skeleton loading states
  - [ ] Implement progressive image loading
  - [ ] Add prefetching for critical routes

## 17. Fixes and Debugging
- [x] Resolve runtime errors: "Element type is invalid" due to undefined components or incorrect imports/exports
- [x] Verify all components are properly exported and imported
- [x] Fix routing issues causing 404 errors on local e paths
- [x] Fix brand logo paths (Knuf -> Kanuf) to resolve 404 errors
