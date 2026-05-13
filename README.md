# Alex Morgan — Lead Automation & Quality Engineer Portfolio

A professional SQA portfolio website with a **Command Center** aesthetic, built with Next.js 14 App Router and Tailwind CSS.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/sqa-portfolio)

## Features

- **Hero Section** — Engineering-focused intro with live stats
- **CI/CD Pipeline Stepper** — Animated Build → Unit → Contract → E2E → Performance Gate visualization
- **Frameworks Grid** — Proficiency bars for Web, API, Performance, and Infrastructure tooling
- **Live Execution Terminal** — Animated Playwright test suite output simulation
- **Project Case Studies** — Results-driven engineering impact cards
- **Contact Section** — Availability status and contact channels

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: JetBrains Mono + Inter (Google Fonts)
- **Deployment**: Vercel

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0f172a` | Deep charcoal base |
| Surface | `#1e293b` | Card backgrounds |
| Success Green | `#10b981` | Pass states, CTAs |
| Execution Amber | `#f59e0b` | Active states, warnings |
| Muted Text | `#94a3b8` | Secondary copy |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Customization

1. Update `components/HeroSection.tsx` — replace "Alex Morgan" with your name and stats
2. Update `components/CaseStudies.tsx` — replace project data with your real case studies
3. Update `components/ContactSection.tsx` — replace contact links with your actual profiles
4. Update `app/layout.tsx` metadata — set your name, description, and OG image

## Deployment

One-click deploy to Vercel:

1. Push to GitHub
2. Import repository in [Vercel Dashboard](https://vercel.com/dashboard)
3. Deploy — no environment variables required
