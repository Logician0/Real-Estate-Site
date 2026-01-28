# Shree Ram Properties - Premium Real Estate Website

A world-class, production-ready Next.js real estate website built with React, Tailwind CSS, and Framer Motion. Designed for luxury property listings, dynamic galleries, and high-conversion lead generation.

## Features

### 🏠 Core Features
- **Hero Section**: Stunning landing page with animated background and clear CTAs
- **Property Listings**: Grid layout with filtering and sorting capabilities
- **Dynamic Property Pages**: Individual pages for each property with full details
- **Premium Galleries**: Image galleries with lightbox and fullscreen modes
- **Contact Forms**: Global and property-specific inquiry forms
- **Testimonials**: Client reviews and trust indicators
- **Responsive Design**: Mobile-first approach with full responsiveness

### 🎨 Design & Animation
- Premium luxury aesthetic with gold accents
- Smooth Framer Motion animations and transitions
- Scroll-triggered animations
- Interactive hover effects
- Glass-morphism UI elements
- Custom Tailwind styling

### ⚡ Performance
- Next.js App Router for optimal routing
- Image optimization with Next/Image
- Lazy loading for galleries
- SEO-optimized meta tags and metadata
- Static generation for property pages
- Responsive images for all devices

### 📱 Mobile-Optimized
- Fully responsive across all devices
- Touch-friendly interactions
- Mobile navigation with hamburger menu
- Optimized forms for mobile input

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Animation**: Framer Motion 10
- **Language**: TypeScript
- **Image Optimization**: Next/Image

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with navigation & footer
│   ├── page.tsx             # Home page with all sections
│   ├── globals.css          # Global styles
│   ├── properties/
│   │   ├── page.tsx         # Properties listing page
│   │   └── [slug]/page.tsx  # Dynamic property detail page
│   ├── privacy/page.tsx     # Privacy policy
│   └── terms/page.tsx       # Terms & conditions
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Top navigation
│   │   └── Footer.tsx       # Footer with links
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── PropertyListing.tsx # Properties grid
│   │   ├── PropertyDetail.tsx # Property detail page
│   │   ├── About.tsx        # About company section
│   │   ├── Testimonials.tsx # Client testimonials
│   │   └── ContactCTA.tsx   # Contact form section
│   ├── cards/
│   │   └── PropertyCard.tsx # Property card component
│   ├── gallery/
│   │   └── Gallery.tsx      # Image gallery component
│   └── forms/
│       └── ContactForm.tsx  # Reusable contact form
└── lib/
    └── properties.ts        # Property data

```

## Pages

### Home Page (`/`)
- Hero section with animated CTA
- Featured properties grid
- About company section
- Client testimonials
- Global contact form
- Footer with links

### Properties Page (`/properties`)
- Full property listings
- Filter by property type
- Sort by price
- Property card grid with hover effects

### Property Detail Page (`/properties/[slug]`)
- Full property gallery with thumbnails
- Lightbox fullscreen view
- Detailed property information
- Amenities list
- Specifications table
- Property-specific inquiry form
- Sticky contact widget
- Location section
- Schedule visit CTA

## Properties Data

Properties are stored in `src/lib/properties.ts` with the following structure:
- Title, location, price
- Property type (House, Flat, Plot, Commercial)
- BHK and area specifications
- Full descriptions
- Image galleries
- Amenities lists
- Highlights

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
- Primary: `#1a1a1a` (dark)
- Secondary: `#f5f5f5` (light)
- Accent: `#d4af37` (gold)

### Properties
Add or modify properties in `src/lib/properties.ts`. Each property needs:
- slug (for URL)
- title, type, location
- price and area info
- gallery images array
- full description
- amenities array

### Contact Information
Update contact details in:
- `src/components/layout/Footer.tsx`
- `src/components/sections/ContactCTA.tsx`
- Phone: +91 98765 43210
- Email: info@shreeramproperties.com

## SEO Optimization

- Meta tags for all pages
- Open Graph support
- Structured data ready
- Dynamic meta descriptions
- Image alt text throughout
- Semantic HTML structure

## Forms

### Contact Form Features
- Name, email, phone, message
- Property-specific inquiries
- Validation
- Success/error messages
- Responsive design

## Animations

- Page load animations with Framer Motion
- Scroll-triggered animations
- Hover effects on cards and buttons
- Gallery transition animations
- Mobile menu animations
- Smooth scroll behavior

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Metrics

- Optimized bundle size
- Lazy loading for images
- Efficient CSS with Tailwind
- Server-side rendering where beneficial
- Static generation for property pages

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm start
```

## Environment Variables

No environment variables required for basic functionality. Optional for enhanced features:
- API endpoints for form submission
- Analytics tracking
- Image CDN configuration

## Future Enhancements

- CMS integration (Contentful, Sanity, etc.)
- Advanced search and filters
- Property comparison tool
- Virtual tours / 3D walkthroughs
- Video galleries
- Mortgage calculator
- Property blog
- User accounts and saved properties
- Payment integration
- Admin dashboard

## License

© 2026 Shree Ram Properties. All rights reserved.

## Support

For questions or issues:
- Phone: +91 98765 43210
- Email: info@shreeramproperties.com
- WhatsApp: Chat with agents

---

Built with ❤️ as an enterprise-grade real estate platform.
