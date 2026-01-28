# Shree Ram Properties - Setup & Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js 18+** (Download from https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site will auto-reload as you make changes.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Features

### Pages Included
✅ **Home** - Hero, featured properties, about, testimonials, contact
✅ **Properties** - Full listing with filters and sorting
✅ **Property Details** - Dynamic pages with galleries, forms, specifications
✅ **Privacy Policy** - Legal page
✅ **Terms & Conditions** - Legal page

### Components Built
✅ Navigation bar with mobile menu
✅ Footer with social links
✅ Property cards with animations
✅ Advanced image gallery with lightbox
✅ Contact forms (global & property-specific)
✅ Testimonial section
✅ About section
✅ CTA sections

### Features Implemented
✅ Premium animations with Framer Motion
✅ Responsive design (mobile, tablet, desktop)
✅ Image optimization with Next/Image
✅ SEO-optimized with meta tags
✅ Dark/light color scheme
✅ Smooth scroll behavior
✅ Form validation
✅ Mobile-first approach

## Customization Guide

### 1. Update Company Information

**File**: `src/lib/properties.ts` (line 1)
```typescript
// Update contact details
```

**Files with contact info**:
- `src/components/layout/Footer.tsx`
- `src/components/sections/ContactCTA.tsx`
- Phone: +91 98765 43210
- Email: info@shreeramproperties.com
- Address: 123 Premium Street, Business District, City

### 2. Add New Properties

**File**: `src/lib/properties.ts`

Add new property objects to the `properties` array:

```typescript
{
  id: 7,
  slug: 'your-property-slug',
  title: 'Property Title',
  type: 'House', // House, Flat, Plot, Commercial
  location: 'Location Name',
  price: '₹X,XX,XX,000',
  priceUSD: '$XXX,000',
  bhk: '4', // or 'N/A' for plots/commercial
  area: '5000 sq ft',
  image: 'https://image-url.jpg',
  description: 'Short description...',
  fullDescription: 'Detailed description...',
  amenities: ['Swimming Pool', 'Gym', 'Security'],
  gallery: ['image1.jpg', 'image2.jpg', ...],
  highlights: ['Prime Location', 'Luxury', ...]
}
```

### 3. Change Colors & Branding

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: '#1a1a1a',      // Main dark color
  secondary: '#f5f5f5',    // Light background
  accent: '#d4af37',       // Gold/highlight color
}
```

### 4. Update Hero Section

**File**: `src/components/sections/Hero.tsx`

Change:
- Tagline
- Main heading
- Subheading
- CTA button text
- Statistics

### 5. Modify Property Images

Replace image URLs in `src/lib/properties.ts` with your own property photos.

**Image Hosting Options**:
- Unsplash (free)
- Pexels (free)
- Cloudinary (paid)
- AWS S3 (paid)
- Vercel Blob (Vercel platform)

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Vercel will automatically:
- Build your Next.js project
- Optimize images
- Deploy with CDN
- Provide SSL certificate

### Deploy to Other Platforms

**Netlify**:
```bash
npm run build
# Deploy the `out` folder
```

**AWS Amplify, Google Cloud Run**, etc. also support Next.js.

## Environment Variables

Create a `.env.local` file for sensitive data:

```env
# Email Service (optional)
NEXT_PUBLIC_API_URL=https://api.example.com
SMTP_PASSWORD=your_password

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## File Structure Explanation

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout (nav + footer)
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── properties/        # Properties pages
│   ├── privacy/           # Legal pages
│   └── terms/
├── components/            # Reusable React components
│   ├── layout/           # Navigation & Footer
│   ├── sections/         # Page sections (Hero, About, etc)
│   ├── cards/            # Property cards
│   ├── gallery/          # Image gallery
│   └── forms/            # Contact forms
└── lib/                  # Utilities & data
    └── properties.ts     # Property listings data
```

## Form Integration

### Contact Form Submission

Currently, the form shows success/error messages locally. To send emails:

**Option 1: SendGrid**
```typescript
const response = await fetch('/api/send-email', {
  method: 'POST',
  body: JSON.stringify(formData)
})
```

**Option 2: EmailJS** (client-side, no backend needed)

**Option 3: Formspree** (easiest - just update action URL)

## Performance Optimization Tips

1. **Images**: Compress with TinyPNG or similar
2. **Lazy Loading**: Already implemented for galleries
3. **Caching**: Vercel handles this automatically
4. **CDN**: Images served via Vercel CDN
5. **Bundle Size**: Monitor with `npm run analyze`

## SEO Optimization

✅ Meta tags on all pages
✅ Open Graph for social sharing
✅ Dynamic meta descriptions
✅ Image alt text
✅ Semantic HTML
✅ Mobile-responsive design
✅ Fast loading times
✅ Structured data ready

## Mobile Responsiveness

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

All pages are fully responsive and tested on:
- iPhone/Safari
- Android/Chrome
- Tablets/iPad
- Desktop browsers

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## Common Customizations

### Change Font

In `src/app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont');

body {
  font-family: 'YourFont', sans-serif;
}
```

### Add New Section to Home

1. Create component: `src/components/sections/YourSection.tsx`
2. Add to home page: `src/app/page.tsx`

### Remove Testimonials Section

In `src/app/page.tsx`, remove:
```typescript
import Testimonials from '@/components/sections/Testimonials'
// ...
<Testimonials />
```

## Troubleshooting

**Port Already in Use**:
```bash
npm run dev -- -p 3001
```

**Build Fails**:
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Images Not Loading**:
- Check image URLs are correct
- Ensure images are publicly accessible
- Next/Image requires optimization setup

## Next Steps

1. **Add More Properties** - Update `src/lib/properties.ts`
2. **Customize Content** - Edit component text
3. **Update Contact Info** - Replace phone/email throughout
4. **Deploy** - Push to Vercel or your hosting
5. **Set Up Email** - Integrate email service
6. **Add Blog** - Create `/blog` route
7. **Analytics** - Add Google Analytics
8. **Forms** - Connect contact form to email service

## Support & Help

For Next.js questions: https://nextjs.org/docs
For Tailwind help: https://tailwindcss.com/docs
For Framer Motion: https://www.framer.com/motion/

## License

© 2026 Shree Ram Properties. All rights reserved.

---

Built with ❤️ using Next.js, React, and Tailwind CSS.
