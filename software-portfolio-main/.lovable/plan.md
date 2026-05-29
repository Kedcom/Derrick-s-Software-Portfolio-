## Personal Portfolio — Software Engineer

A premium, modern portfolio site built as a multi-route TanStack Start app (SSR + SEO friendly). All content uses placeholders structured for easy swap-in later.

### Stack note
This environment runs **TanStack Start + Vite + React 19 + TypeScript + Tailwind v4**, not Next.js 15. Functionally equivalent: SSR, file-based routing, per-route SEO metadata, fast loading. Animations via **Framer Motion**. Deployment via Lovable's **Publish** button (not Vercel) — one click, custom domain supported.

---

### Routes (each with its own SEO `head()`)

```text
/              Hero + highlights (home)
/about         About + education
/skills        Categorized skills grid
/projects      Filterable project gallery
/experience    Timeline (work, internships, education)
/certifications Certifications & achievements
/contact       Contact info + mailto form
```

Shared layout in `__root.tsx`: sticky glass navbar, scroll progress bar, footer.

---

### Design system

- **Palette**: deep blue primary (`oklch` blue), white/near-white surfaces, near-black ink. Full dark mode mirror.
- **Typography**: Inter (body) + a tighter display weight for headings, loaded via Google Fonts.
- **Effects**: subtle glassmorphism on navbar/cards, soft shadows, gradient accents on hero.
- **Theme toggle**: persisted in `localStorage`, no-flash via `ScriptOnce` pre-hydration script that sets the `dark` class on `<html>`.
- **Animations** (Framer Motion):
  - Hero: staggered fade-up on load
  - Sections: `whileInView` reveal (fade + slight rise)
  - Cards: hover lift + border glow
  - Page transitions: subtle fade

---

### Page details

**1. Hero (/)**
- Name, "Software Engineer" title, one-line value prop
- 3 CTAs: View Projects (→ /projects), Contact Me (→ /contact), Download Resume (link to `/resume - Derrick Ejinkeonye.pdf` placeholder in `public/`)
- Animated gradient blob background, scroll cue
- Brief "What I build" strip + featured projects preview (3 cards) + CTA to full list

**2. About (/about)**
- Professional summary paragraph
- Quick stats (years coding, projects shipped, etc.)
- Education cards
- "Currently learning" strip

**3. Skills (/skills)**
Categorized grid with icon chips:
- Frontend — React, Next.js, TypeScript, Tailwind
- Backend — Node.js, PHP, REST APIs
- Mobile — Kotlin, Jetpack Compose, Android
- Databases — SQL, PostgreSQL, MySQL
- Cloud/DevOps — Git, CI/CD, Vercel/Cloudflare
- Tools — VS Code, Figma, Postman
Each category is a glass card; skills animate in on scroll.

**4. Projects (/projects)**
- Filter bar: All / React / Next.js / Node / PHP / Kotlin / C# / SQL (derived from project tags)
- Project card: thumbnail, title, description, tech badges, GitHub link, live demo link, **Featured** badge
- 6 placeholder projects across stacks
- Smooth filter transitions via Framer Motion `AnimatePresence`

**5. Experience (/experience)**
- Vertical timeline with alternating cards (desktop) / single column (mobile)
- Entry types color-coded: Work, Internship, Freelance, Education
- Date range, role, company, bullet points

**6. Certifications (/certifications)**
- Grid of certificate cards: title, issuer, date, credential link

**7. Contact (/contact)**
- Form (name, email, subject, message) with **zod** validation
- On submit: opens user's email client via `mailto:` with prefilled subject + body (per your choice)
- Sidebar with email, LinkedIn, GitHub, Twitter/X (placeholders)
- Toast feedback via existing `sonner`

**8. Footer** (in root layout)
- Quick nav, social icons, copyright

---

### Extras included
- Scroll progress bar (fixed top, Framer Motion `useScroll`)
- Smooth scroll behavior
- Animated section reveals (reusable `<Reveal>` component)
- Project tech filter
- Resume download button (placeholder PDF in `public/`)
- Accessibility: semantic landmarks, focus rings, alt text, aria labels, color-contrast-checked palette, `prefers-reduced-motion` respected
- SEO: per-route title/description/og:title/og:description; sitemap-ready structure

---

### File structure

```text
src/
  routes/
    __root.tsx              (navbar, footer, progress bar, theme script)
    index.tsx               (hero + highlights)
    about.tsx
    skills.tsx
    projects.tsx
    experience.tsx
    certifications.tsx
    contact.tsx
  components/
    layout/  Navbar, Footer, ScrollProgress, ThemeToggle
    sections/ Hero, FeaturedProjects, SkillCategory, ProjectCard,
              TimelineItem, CertCard, ContactForm
    ui/Reveal.tsx           (Framer Motion in-view wrapper)
  data/
    profile.ts              (name, socials, resume link)
    projects.ts             (project list — edit here)
    skills.ts               (categorized skills)
    experience.ts           (timeline entries)
    certifications.ts
  lib/theme.ts              (theme persistence)
public/
  resume.pdf                (placeholder)
  og-image.png              (placeholder)
```

All editable content centralized in `src/data/*.ts` so you swap text/links/images in one place.

---

### Setup & deployment

- **Local dev**: already running in this preview — no setup needed.
- **Edit content**: open files in `src/data/` and replace placeholders.
- **Resume**: drop your PDF at `public/resume.pdf`.
- **Project images**: place in `public/projects/` and reference in `src/data/projects.ts`.
- **Deploy**: click **Publish** (top-right). You get a `*.lovable.app` URL instantly; custom domain available after first publish.

### Dependencies to add
- `framer-motion`
- `zod` (form validation)
- `lucide-react` (already present in shadcn setup; for icons)
