# Social Profile — Digital Business Card

A modern, mobile-friendly SPA built with **Nuxt 4** for showcasing a personal brand or real estate agent profile. Features a clean card-style layout with social links, a property gallery, and a QR code popup.

![Screenshot](/screenshot.png)

## Tech Stack

- **Framework:** Nuxt 4 (SPA mode, `ssr: false`)
- **Templating:** Pug
- **Styling:** SCSS


## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Build for production |
| `npm run start` | Preview production build |
| `npm run generate` | Generate static site |

## Project Structure

```
├── app/                    # Nuxt 4 application source
│   ├── assets/             # SCSS, fonts, images
│   ├── components/ui/      # Reusable components (gallery, circle)
│   └── pages/              # Application pages
├── public/                 # Static assets (icons, images, styles)
├── nuxt.config.ts          # Nuxt configuration
└── package.json
```

## Features

- **Profile card** — avatar, name, contact info with clickable phone numbers
- **Social links** — YouTube, Facebook, X, Instagram, Discord, Reddit, WhatsApp, Skype, Vimeo, Email
- **Property gallery** — scrollable listing with captions and prices
- **QR code** — click the QR circle to get a QR code for the profile link
- **Copy link** — click the header link to copy the URL to clipboard
