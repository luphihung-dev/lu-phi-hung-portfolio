# Lu Phi Hung Portfolio

A polished one-page 3D portfolio website for an Intern Software Engineer candidate, built with React, Vite, Tailwind CSS, Three.js, and Lucide React.

## Features

- Full-bleed Three.js CRM/data-flow hero scene
- Featured SalesFlow CRM project section
- Screenshot grid ready for real project images
- CRM/Salesforce concept mapping
- Skills, about, and contact sections
- Responsive desktop, tablet, and mobile layout
- Netlify-ready static build

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Netlify Deploy

- Build command: `npm run build`
- Publish directory: `dist`

## Screenshot Assets

Place these files in `src/assets/`:

- `dashboard-desktop.png`
- `mobile-dashboard.png`
- `deals-pipeline.png`
- `customer-profile.png`

The UI includes graceful fallback panels if these assets are not present yet.
