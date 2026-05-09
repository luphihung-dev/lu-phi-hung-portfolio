# Lu Phi Hung - 3D Developer Portfolio

A modern one-page developer portfolio for **Lu Phi Hung**, an Intern Software Engineer candidate focused on Java Spring Boot, React, PostgreSQL, and CRM/Salesforce-oriented full-stack development.

The site is designed to present a professional internship-ready profile, highlight the SalesFlow CRM project, and provide recruiters with quick access to the candidate's portfolio, GitHub, LinkedIn, and resume.

## Live Site

- Portfolio: https://luphihung-dev.netlify.app/
- GitHub: https://github.com/luphihung-dev
- LinkedIn: https://www.linkedin.com/in/luphihung/

## Featured Project

### SalesFlow CRM

SalesFlow CRM is a Salesforce-inspired full-stack CRM project built to demonstrate practical software engineering fundamentals and CRM workflow thinking.

- Live demo: https://cedar-salesflow-crm.netlify.app
- Repository: https://github.com/luphihung-dev/SalesFlow-CRM
- Backend API: https://salesflow-crm-production.up.railway.app

Key concepts shown in the portfolio:

- JWT authentication
- Role-based access control for Admin, Manager, and Sales users
- Team/owner-based data visibility
- Customer directory, deal pipeline, task queue, and activity timeline
- Dashboard analytics
- Backend automation inspired by Salesforce Flow and Apex Trigger concepts
- Responsive CRM interface for desktop and mobile

## Tech Stack

- React
- Vite
- Tailwind CSS
- Three.js
- Lucide React
- Netlify

## Portfolio Highlights

- Full-bleed animated 3D hero scene representing CRM/data-flow concepts
- Circular personal avatar with ambient lighting and polished dark SaaS styling
- Typewriter animation for the internship title
- Featured SalesFlow CRM project section with links and demo credentials
- Product screenshot grid for CRM views
- CRM/Salesforce concept mapping section
- Skills grouped by backend, frontend, CRM/Salesforce learning direction, and deployment tools
- Contact section with email, GitHub, LinkedIn, and resume links
- Responsive layout optimized for desktop, tablet, and mobile
- Netlify-ready deployment configuration

## Project Structure

```text
.
├── public/
│   ├── profile.png
│   └── resume.pdf
├── src/
│   ├── assets/
│   │   ├── customer-profile.png
│   │   ├── dashboard-desktop.png
│   │   ├── deals-pipeline.png
│   │   └── mobile-dashboard.png
│   ├── components/
│   │   ├── ContactSection.jsx
│   │   ├── Hero3D.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ScreenshotGrid.jsx
│   │   ├── ScrollReveal.jsx
│   │   ├── SectionHeader.jsx
│   │   └── SkillGroup.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── netlify.toml
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Netlify Deployment

This project includes a `netlify.toml` file, so Netlify can detect the deployment settings automatically.

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Deployment settings:

- Build command: `npm run build`
- Publish directory: `dist`

## Assets

The portfolio expects the following public and project assets:

- `public/profile.png` - personal avatar used in the hero section
- `public/resume.pdf` - resume opened from the Resume button
- `src/assets/dashboard-desktop.png` - analytics dashboard screenshot
- `src/assets/mobile-dashboard.png` - mobile CRM screenshot
- `src/assets/deals-pipeline.png` - deal pipeline screenshot
- `src/assets/customer-profile.png` - customer profile screenshot

## Purpose

This portfolio supports applications for Intern Software Engineer, Java Backend Intern, Full-Stack Developer Intern, and CRM/Salesforce-oriented software roles.
