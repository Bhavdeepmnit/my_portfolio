# Portfolio Repository Guide

## Project overview

This is Bhavdeep's personal portfolio: a React 19 single-page application built with Vite and styled with custom CSS and Tailwind CSS. It presents education, skills, work experience, projects, leadership roles, and contact information.

## Repository structure

- `src/main.jsx` — application entry point.
- `src/App.jsx` — section composition and active-navigation state.
- `src/components/` — page sections and reusable UI components.
- `src/data/` — portfolio facts and content. Update information in these data files rather than embedding it in components.
- `src/assets/` — images and static assets.
- `src/index.css` and `src/App.css` — global styles and visual-system rules.
- `public/` — files served directly by Vite.
- `dist/` — generated production build output.

## Content model

- Personal details: `src/data/personalInfo.js`
- Animated hero roles: `src/data/constants.js`
- About content and social links: `src/data/aboutData.js`
- Education: `src/data/education.js`
- Skills: `src/data/skills.js`
- Work experience: `src/data/experiences.js`
- Projects: `src/data/projects.js`

## Development

```powershell
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

Use Node.js and npm supported by Vite 7. Run commands from the repository root.

## Resume-aligned facts

- Software Engineer, Software Development Group, ICICI Bank — July 2026 to Present.
- Founding Member for Full-Stack Systems & Real-Time Pipelines at Drivomate — May 2025 to April 2026.
- B.Tech in Computer Science and Engineering at MNIT Jaipur — 2022 to 2026, CGPA 6.52/10.
- Featured work includes StockFlow, LibStack, T-Shirt Order Management Portal, and real-time ADAS pipelines.
- Leadership includes Advisor to the Vice-President, SPHINX; State Convenor, Think India Jaipur Prant.

When changing resume facts, keep the data files, portfolio copy, and this guide consistent.

## Engineering conventions

- Prefer small, focused React components.
- Keep portfolio content in `src/data/`.
- Preserve existing light-theme, warm-cream visual style and reduced-motion behavior.
- Use semantic, accessible markup and `target="_blank"` with `rel="noopener noreferrer"` for external links.
- Validate changes with lint and a production build.
- Do not commit generated `dist/` or dependency changes unless deployment or dependency updates are explicitly requested.
