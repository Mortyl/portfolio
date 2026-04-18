# Marcus — Frontend Developer Portfolio

A clean, minimal portfolio site built with Next.js 14, TypeScript, and Tailwind CSS. Features an electric indigo accent colour scheme, dark mode, project case study pages, a working contact form, and a dedicated about page.

## Tech stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Fonts** — DM Serif Display, DM Mono, Outfit
- **Email** — Resend
- **Deployment** — Vercel

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env.local` file in the root of the project:

```
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your@gmail.com
```

Add the same variables to Vercel under Settings → Environment Variables.

## Customising your content

All content lives in one file: **`src/lib/data.ts`**

| Export | What to change |
|---|---|
| `siteConfig` | Your name, initials, role, email, subheading, description |
| `projects` | Your real projects — title, description, tags, URLs, case study content |
| `stack` | Your actual tech stack |
| `featuredStack` | The techs you want highlighted |
| `socialLinks` | Your GitHub, LinkedIn, CV URL |

## Project structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API route (Resend)
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── projects/
│   │   └── [id]/
│   │       └── page.tsx          # Dynamic project case study pages
│   ├── layout.tsx                # Root layout + metadata
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Fonts + Tailwind base
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx            # Top navigation
│   │   ├── SectionLabel.tsx      # Section heading component
│   │   ├── ThemeProvider.tsx     # next-themes provider
│   │   └── ThemeToggle.tsx       # Dark / light mode slider
│   └── sections/
│       ├── HeroSection.tsx       # Hero with photo slot
│       ├── StackSection.tsx      # Tech stack chips
│       ├── ProjectsSection.tsx   # Project cards grid
│       └── ContactSection.tsx    # Footer social links
├── lib/
│   └── data.ts                   # All content — edit this!
└── types/
    └── index.ts                  # TypeScript interfaces
```

## Adding your photo

1. Drop your photo into `/public/photo.jpg`
2. Open `src/components/sections/HeroSection.tsx`
3. Delete the placeholder `<div>` inside the photo frame
4. Uncomment the `<Image>` block below it

## Adding project images

1. Add your screenshots to `/public/images/`
2. In `src/lib/data.ts` update the `image` field for each project:
```ts
image: "/images/your-screenshot.jpg"
```

## Adding your CV

Drop your CV into `/public/cv.pdf` — the CV link in the footer will serve it automatically.

## Deploying

Push to GitHub and connect your repo at [vercel.com](https://vercel.com) for automatic deployments on every push to master.
