# Portfolio — Next.js + TypeScript

A clean, minimal portfolio site built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Customising your content

All content lives in one file: **`src/lib/data.ts`**

Update the following:

| Export | What to change |
|---|---|
| `siteConfig` | Your name, email, tagline, hero copy, about text |
| `projects` | Your real projects — title, description, tags, URLs |
| `stack` | Your actual tech stack |
| `featuredStack` | The 4 techs you want highlighted |
| `socialLinks` | Your GitHub, LinkedIn, email, CV URL |

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Homepage (assembles sections)
│   └── globals.css         # Fonts + Tailwind base
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── SectionLabel.tsx
│   │   └── ProjectCard.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── StackSection.tsx
│       ├── ProjectsSection.tsx
│       ├── AboutSection.tsx
│       └── ContactSection.tsx
├── lib/
│   └── data.ts             # All your content — edit this!
└── types/
    └── index.ts            # TypeScript interfaces
```

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys.

## Adding your CV

Drop a `cv.pdf` into the `/public` folder — the CV link in the footer will serve it automatically.
