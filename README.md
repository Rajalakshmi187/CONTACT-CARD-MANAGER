# Rolodex — Contact Cards Manager

A polished React SPA for managing digital business cards with real-time search.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm start
```

Then open **http://localhost:3000** in your browser.

---

## Project Structure

```
contact-cards/
├── public/
│   └── index.html           ← HTML shell (loads Google Fonts)
├── src/
│   ├── components/
│   │   ├── ContactCard.js   ← Single card component
│   │   ├── ContactCard.css
│   │   ├── ContactForm.js   ← Add-contact form with validation
│   │   ├── ContactForm.css
│   │   ├── ContactList.js   ← Grid wrapper + empty state
│   │   └── ContactList.css
│   ├── App.js               ← State management + composition
│   ├── App.css              ← Header, search bar, layout
│   ├── index.js             ← ReactDOM entry point
│   └── index.css            ← Global reset + CSS variables
└── package.json
```

## Features

- **Add contacts** — animated drawer form with validation
- **Live search** — filters by name, company, or job title
- **Delete cards** — animated removal on ✕ click
- **Seed data** — 3 example cards preloaded
- **Avatars** — accepts image URLs or auto-generates initials
- **Accent colours** — unique per-contact colour derived from name
- **Responsive grid** — auto-fills 280px columns on any screen

## Design System

| Variable | Value |
|---|---|
| `--gold` | `#c9a84c` |
| `--ink` | `#0d0d0d` |
| `--paper` | `#f5f0e8` |
| `--rust` | `#b85c38` |
| Font Display | Playfair Display |
| Font Body | DM Sans |
