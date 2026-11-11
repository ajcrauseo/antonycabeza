# Antony Cabeza — Portfolio

Personal portfolio of Antony Cabeza: Electronics Technician, Computer Science student at UBA and Full Stack Developer.

**Live site:** [www.antonycabeza.com](https://www.antonycabeza.com)

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) and React 19
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://motion.dev/) and `react-parallax-tilt` for animations
- `react-scroll` for in-page navigation
- `react-icons` for icons

## Features

- **Server Components first:** the page content renders on the server, and animations live in small client wrappers (`app/hoc`), which keeps the JavaScript bundle small.
- **SEO:** metadata API (Open Graph, Twitter cards, canonical URL), generated social images, JSON-LD structured data (`Person`, `WebSite`, `ProfilePage`), `robots.txt`, `sitemap.xml` and a web app manifest.
- **Performance:** optimized images with `next/image`, a preloaded hero image, self-hosted fonts with `next/font` and a WebP background.
- **Accessibility:** semantic sections and headings, accessible mobile menu (`aria-expanded`, `Escape` to close) and labeled icon links.
- **Security headers:** `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` and HSTS in production (`next.config.js`).

## Getting started

Requirements: Node.js 22.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). No environment variables are needed.

### Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create a production build            |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project structure

```
app/
├── components/         # Page sections (Hero, About, Works, Footer...) and UI pieces
├── constants/
│   ├── constants.js    # Content: nav links, services, projects, social links
│   └── site.js         # Site config: URL, name, title, descriptions, keywords
├── hoc/                # Client wrappers for animations (MotionDiv, SectionWrapper, TiltCard)
├── lib/motion.js       # Framer Motion variants
├── layout.js           # Root layout and metadata
├── page.js             # Home page
├── opengraph-image.jsx # Generated Open Graph image
├── twitter-image.jsx   # Generated Twitter image
├── manifest.js         # Web app manifest
├── robots.js           # robots.txt
└── sitemap.js          # sitemap.xml
public/                 # Static assets (images, icons, favicon)
```

## Updating content

- **Projects, services and social links:** edit `app/constants/constants.js`. Project images go in `public/assets` and are exported from `public/assets/index.js`.
- **Site title, description and keywords:** edit `app/constants/site.js`. These values feed the metadata, social images, structured data and manifest.
- **Sitemap date:** update `lastUpdated` in `app/constants/site.js` whenever the page content changes.

