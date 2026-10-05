# Bhavdeep - Portfolio

React 19 + Vite portfolio with a Claude-inspired light theme, full-screen section layout and CSS 3D card interactions.

## Run locally

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

The production output is `dist/`. Run commands from this repository root, which is the local `new_porfolio` directory.

## Architecture and content flow

- `src/main.jsx` mounts React.
- `src/App.jsx` composes sections and owns navigation state. An IntersectionObserver tracks active sections.
- `src/components/` contains section components and reusable `Reveal` and `TiltCard` interactions. `AnimatedRole` owns typing state so it does not rerender the whole page.
- `src/data/` holds personal information, projects, education, skills, and experience. Edit facts here; the redesign retains existing content.
- `src/index.css` defines the theme, section layout, responsive styles, and reduced-motion behavior.
- `src/assets/profile.webp` is the optimized hero portrait. The source photograph is retained.

## Design

The current theme is light only: warm cream canvas, paper surfaces, charcoal text, terracotta accents, Georgia serif display headings, and Inter UI text. Semantic CSS variables and Tailwind color tokens keep all sections consistent. No theme toggle is included. System serif headings avoid an additional font download.

Eight numbered sections: Home, About, Education, Skills, Experience, Projects, Achievements, and Contact. Sections occupy at least the viewport height and expand for long content. Navigation uses a compact header, section rail on larger screens, and an expandable menu. Cards use pointer-driven perspective, depth, and a soft highlight. Touch devices and reduced-motion preferences disable tilt. Skills use a CSS sphere on desktop and a grid on touch devices.

## Performance

- Removed the forced loading screen and continuous custom-cursor animation from the app.
- Removed the eagerly imported WebGL hero from the rendered component tree; Three.js is no longer required by the production app entry.
- Converted the 6.25 MB source portrait into a roughly 75 KB WebP.
- Removed duplicate Tailwind imports and the unresolved example CSS asset reference.
- Skill-sphere animation stops outside its viewport.
- Existing inactive components remain available in source but are not mounted.

Build size is evidence of payload improvement, not a measured real-user load-time guarantee.

## Contact form

The frontend sends directly through EmailJS. It does not call the separate sibling Express/Nodemailer backend. Existing EmailJS identifiers are preserved; successful delivery requires the existing service configuration to remain valid. Form validation can be checked without sending an email.

## Deployment

Use the Vite build command `npm run build` and output directory `dist`. Match the deployment root to the repository layout: this Git repository contains the frontend at its root. Automatic deployment after a GitHub push depends on the hosting integration.

## Review notes

Some existing project buttons lead to a GitHub profile rather than a project repository. Project preview bands are graphic placeholders, not screenshots. Employment dates, current student/intern descriptions, and numerical project claims are existing content and should be checked by the owner before public publication.
