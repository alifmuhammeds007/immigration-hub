# Pixel-Perfect SEO Implementation Guide for Immigration Hub

This document contains precise, copy-pasteable specifications and code snippets to implement search engine optimization (SEO), social sharing metadata (Open Graph/Twitter Cards), search bot configurations, and structured Schema markup for **Immigration Hub**. 

---

## 1. Project Context & Stack
- **Framework**: React (Vite-based build system)
- **Styling**: Tailwind CSS
- **Architecture**: Single-Page Application (SPA)
- **Structure**: Core content sections are imported into `src/App.jsx` and rendered sequentially:
  - `Navbar`
  - `Hero` (contains the page's single `<h1>` title)
  - `AboutUs`
  - `VisasNZ`
  - `StudyAbroad`
  - `FormsHub`
  - `Testimonials`
  - `ContactUs`
  - `QuickEnquiry`
  - `FloatingBubbles`

---

## 2. Meta Tags & Shell Configuration
Add the following meta tags inside the `<head>` element of [index.html](file:///c:/Users/nabee/immigrationhub/immigration-hub/index.html) to define description, keywords, canonical URLs, and optimize search engine index behavior.

### Target File: `index.html`
Replace the existing `<head>` contents with the following:

```html
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary SEO Meta Tags -->
    <title>Immigration Hub | Licensed Immigration Adviser & Study Abroad Experts</title>
    <meta name="description" content="Immigration Hub provides expert study visa and migration services for New Zealand, UK, Europe, Dubai, and Malta. Led by a Licensed Immigration Adviser (LIA)." />
    <meta name="keywords" content="Licensed Immigration Adviser, New Zealand Student Visa, Study in UK, Study in Europe, Study in Dubai, Visa Consultant, Immigration Hub, New Zealand Visitor Visa, Malta student visa" />
    <meta name="author" content="Immigration Hub" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://immigrationhub.co.nz" />

    <!-- Open Graph / Facebook / WhatsApp (Social Media Previews) -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Immigration Hub | Licensed Immigration Adviser & Study Abroad Experts" />
    <meta property="og:description" content="Unlock global study and migration pathways to New Zealand, UK, Europe, and Dubai. Get direct guidance from our Licensed Immigration Adviser." />
    <meta property="og:image" content="https://immigrationhub.co.nz/og-preview.jpg" />
    <meta property="og:url" content="https://immigrationhub.co.nz" />
    <meta property="og:site_name" content="Immigration Hub" />

    <!-- Twitter Card (X Media Previews) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Immigration Hub | Licensed Immigration Adviser & Study Abroad Experts" />
    <meta name="twitter:description" content="Unlock global study and migration pathways to New Zealand, UK, Europe, and Dubai. Direct LIA support." />
    <meta name="twitter:image" content="https://immigrationhub.co.nz/og-preview.jpg" />
  </head>
```

---

## 3. Structured Data (JSON-LD LocalBusiness Schema)
Insert this JSON-LD schema inside the `<head>` of [index.html](file:///c:/Users/nabee/immigrationhub/immigration-hub/index.html). This provides search crawlers (like Googlebot) structured details about physical branch coordinates, phone numbers, and operational hours to enable rich snippets in local searches.

### Target File: `index.html` (Append to `<head>`)

```html
    <!-- Structured LocalBusiness Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Immigration Hub",
      "image": "https://immigrationhub.co.nz/favicon.svg",
      "url": "https://immigrationhub.co.nz",
      "telephone": "+64 21 000 0000",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Level 1, Office Block",
        "addressLocality": "Auckland",
        "postalCode": "1010",
        "addressCountry": "NZ"
      },
      "sameAs": [
        "https://www.facebook.com/immigrationhub",
        "https://www.linkedin.com/company/immigrationhub"
      ],
      "description": "Licensed Immigration Adviser expert support for New Zealand student visas, visitor visas, and study abroad pathways in UK, Europe (France, Malta, Spain), and Dubai.",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      ]
    }
    </script>
```

---

## 4. Search Crawler Assets
Create two static crawler assets inside the `public/` directory so they are bundled into the project root on build.

### File 1: `public/robots.txt`
```text
User-agent: *
Allow: /

Sitemap: https://immigrationhub.co.nz/sitemap.xml
```

### File 2: `public/sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://immigrationhub.co.nz/</loc>
    <lastmod>2026-06-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 5. Accessibility & Semantic Checklist
To ensure the pages score 100/100 on **Lighthouse SEO and Accessibility**:

1. **Heading Hierarchy**: 
   - Ensure the only `<h1>` tag on the landing page is the main heading inside `src/components/Hero.jsx`.
   - All section headers (e.g., in `AboutUs`, `VisasNZ`, `StudyAbroad`, `Testimonials`, `ContactUs`) must strictly use `<h2>` for section titles, and `<h3>` or `<h4>` for sub-sections. Do not skip header levels.
2. **Alt Attributes for Images**:
   - Every `<img>` tag in the React components must have a valid `alt` attribute.
   - For decorative illustrations (like floating backgrounds, maps, or background planes), use `alt=""` or add `aria-hidden="true"` so screen readers ignore them.
3. **Unique IDs**:
   - Every input element in `FormsHub.jsx`, `ContactUs.jsx`, and `QuickEnquiry.jsx` must be explicitly coupled with a `<label>` containing a matching `htmlFor` attribute.
   - Every interactive element (inputs, textareas, selects, and major CTA buttons) must have a unique `id` attribute for browser index testing.

---

## 6. Local Testing & Verification
Verify the implementation builds cleanly with Vite:

```bash
# 1. Compile the production bundle
npm run build

# 2. Check for typescript or eslint errors
# 3. Serve the output locally to test performance and structured data
npx vite preview
```
Use the **Google Schema Markup Validator** or **Lighthouse Tab** in Chrome DevTools to ensure zero errors are reported.
