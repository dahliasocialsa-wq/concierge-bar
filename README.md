# Concierge Bar — Static Site

**Stack:** Pure HTML/CSS/JS → Vercel (static hosting)  
**CMS ready:** Plug in Tina CMS or Keystatic for blog content management

---

## Project Structure

```
concierge-bar/
├── index.html          ← Homepage
├── blog.html           ← Blog index (The Edit)
├── services.html       ← Services page
├── gift-boxes.html     ← Gift boxes page
├── about.html          ← About page
├── contact.html        ← Contact/enquiry page
├── blog/
│   └── *.html          ← Individual blog post pages
├── css/
│   └── global.css      ← Shared design tokens + components
├── js/
│   ├── components.js   ← Nav + footer injection + shared JS
│   └── main.js         ← Scroll reveal, nav scroll
└── vercel.json         ← Vercel config (clean URLs, caching, rewrites)
```

---

## Deploy to Vercel

### Option A: Drag & Drop (fastest)
1. Zip this entire folder
2. Go to [vercel.com](https://vercel.com) → New Project
3. Drag the zip onto the deploy area
4. Done — live in ~30 seconds

### Option B: GitHub (recommended for ongoing work)
1. Push this folder to a GitHub repo
2. Connect to Vercel via New Project → Import Git Repository
3. Vercel auto-deploys on every push to `main`
4. Add custom domain in Project Settings → Domains

---

## Adding Blog Posts

Each blog post is a `.html` file in the `/blog/` directory.

**To add a new post:**
1. Copy `blog/the-art-of-giving-something-personal.html`
2. Rename it to your slug: e.g. `blog/gift-guide-for-her.html`
3. Update the `<title>`, `<meta name="description">`, the JSON-LD structured data, and the article content
4. Add the post card to `blog.html`
5. Push to GitHub → Vercel auto-deploys

---

## Connecting a Headless CMS (next step)

### Tina CMS (recommended)
```bash
npx @tinacms/cli@latest init
```
This converts the `/blog/` directory into a CMS-managed collection.  
Client edits content via a visual editor at `yoursite.com/admin`.

### Keystatic
Add to `package.json` and configure `keystatic.config.ts` to manage  
blog posts as Markdown/MDX files in `/blog/`.

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `#1A2B4A` | Primary dark, nav bg, headings |
| `--crimson` | `#C0202A` | Accent, CTAs, underlines |
| `--champagne` | `#F5E6C8` | Light text on dark bg |
| `--butter` | `#F5D97A` | Hero right panel bg |
| `--cream` | `#FAF5EC` | Page background |
| `--cream-mid` | `#F2EAD8` | Section backgrounds |

**Fonts:**
- `Fraunces` — Display/headings (italic, weight 200–400)
- `DM Sans` — Body (weight 200–500)
- `DM Mono` — Labels, nav, buttons (weight 300–400)
