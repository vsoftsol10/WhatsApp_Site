# WhatsApp CRM — Landing Page

React + Vite + Tailwind CSS v4 recreation of the hero section shown in the reference design.

## Folder structure

```
whatsapp-crm-landing/
├── index.html                  # HTML entry point
├── package.json
├── vite.config.js              # Vite + Tailwind v4 plugin config
├── public/
│   └── images/
│       ├── whatsapp-icon.svg   # included placeholder icon (used in navbar logo)
│       ├── favicon.svg
│       └── hero-woman.png      # ✅ your image, already included
└── src/
    ├── main.jsx                 # React root
    ├── index.css                 # Tailwind import + theme tokens
    ├── App.jsx                   # Composes Navbar + Hero
    └── components/
        ├── Navbar.jsx
        └── Hero.jsx
```

## About the hero image

Your `hero-woman.png` already has the "New Lead" card, chat bubble, WhatsApp icon, checkmark, growth chart, and the two stat cards ("2.5K+ Active Users" / "45K+ Conversations/Day") baked directly into the artwork. Because of that, `Hero.jsx` simply renders the image full-size next to the headline — there's no separate hand-coded overlay markup to keep in sync with it.

If you ever swap in a plain photo (no baked-in UI), you'd want to re-add floating card elements in `Hero.jsx` positioned with `absolute` + Tailwind utilities, similar to the first draft of this component.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- Colors, the pill-shaped buttons, and the floating chat cards are built with Tailwind utility classes and a small custom theme (`brand-green`, `brand-yellow`) defined in `src/index.css`.
- No `tailwind.config.js` is needed — this project uses Tailwind v4's CSS-first config via the `@theme` block and the `@tailwindcss/vite` plugin.
- The nav links (`Features`, `How Its Work`, `Pricing`) are anchor links; wire them up to real sections/routes as you build the rest of the page.
