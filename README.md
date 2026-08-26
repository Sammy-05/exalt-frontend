# Exalt — Frontend

A multi-page marketing and portfolio site for a digital agency: services, process, case studies,
a blog with rich-text articles, and a working contact pipeline.

The largest project in this account by both commit count (93) and content — most of the weight is
the image library behind the portfolio and blog sections.

## Pages

| Route | What |
|---|---|
| `/` | Home — hero slider, services overview, featured work, client logos |
| `/about` | Team and company story |
| `/services` | Service breakdown with per-service panels |
| `/process` | How engagements run, step by step |
| `/portfolio` | Case study grid |
| `/blog` | Article index |
| `/blog/:id` | Individual article, rendered from rich text |
| `/contact` | Contact form |

## Stack

- **React 18** + React Router 6, bootstrapped with Create React App
- **Tailwind CSS** with `@tailwindcss/typography` for article bodies
- **React Quill** — rich-text rendering for blog content
- **React Slick** / `react-slideshow-image` — carousels
- **react-lazy-load-image-component** — lazy loading, which matters given the asset volume
- **Formspree** + **EmailJS** — contact form delivery without a backend
- **Axios**, **Lodash**

## Running it

The app lives one directory down:

```bash
cd exalt-frontend
npm install
npm start       # http://localhost:3000
npm run build
```

## Structure

```
exalt-frontend/src/
  pages/        # Home, About, Services, Process, Portfolio, Blog, IndividualBlog, Contact
  components/   # reusable panels (primary/secondary/tertiary), Navbar, Footer, sliders
  assets/       # per-section image sets + blogsData.json, links.json
```

Blog and link content is data-driven (`assets/blogsData.json`, `assets/links.json`) rather than
hardcoded into components.
