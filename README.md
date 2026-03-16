# Emaks Portfolio

Personal portfolio site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Stack

- [Next.js 14](https://nextjs.org) (App Router)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Resend](https://resend.com) — contact form emails
- [Vercel](https://vercel.com) — deployment

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# → edit .env.local and add your RESEND_API_KEY

# 3. Run the dev server
npm run dev
# → open http://localhost:3000
```

## Project structure

```
src/
├── app/
│   ├── globals.css          # CSS variables, base styles, utilities
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Home page — assembles all sections
│   └── api/contact/route.ts # Contact form API (Resend)
├── components/
│   ├── Nav.tsx              # Sticky nav with mobile menu
│   ├── Footer.tsx
│   ├── ui/
│   │   └── FadeUp.tsx       # Scroll-triggered fade animation
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Testimonials.tsx
│       └── Contact.tsx
└── lib/
    └── data.ts              # ← ALL content lives here. Edit this file.
```

## Customising content

Everything you need to update is in **`src/lib/data.ts`**:

- `siteConfig` — your name, email, social links
- `projects` — add/edit/remove projects (update `demo`, `github`, `caseStudy` links)
- `testimonials` — swap in real testimonials as you collect them
- `skills` — adjust percentages as your skills grow
- `aiTools` — your current AI tool stack
- `values` — what you care about

## Setting up the contact form

1. Create a free account at [resend.com](https://resend.com)
2. Get your API key from the Resend dashboard
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_EMAIL=emakenemiprosper@gmail.com
   ```
4. On Vercel, add these same env vars in **Project Settings → Environment Variables**

## Deploying to Vercel

```bash
# Push to GitHub first
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Emak-star/portfolio.git
git push -u origin main
```

Then go to [vercel.com](https://vercel.com), import the repo, add your env vars, and click Deploy. Done.

## Adding your CV

Drop your CV file as `public/cv.pdf` — the nav and contact section already link to `/cv.pdf`.
