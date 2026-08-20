# Ben Whomsley — Portfolio

Personal portfolio site: experience, professional & side projects, and a contact form.

Live at [whomsley.dev](https://whomsley.dev).

## Stack

- [Next.js](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [Jest](https://jestjs.io) + [React Testing Library](https://testing-library.com/react)
- Contact form submissions handled via Netlify Forms
- Deployed on Netlify

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Jest test suite |
| `npm run test:watch` | Run tests in watch mode |

## Project structure

```
src/app/
  components/   # Page sections & shared UI (nav, header, experience, projects, contact, footer)
  constants.ts  # Content: experience history & project list
  types.ts      # Shared TypeScript types
  page.tsx      # Page composition
  layout.tsx    # Root layout & metadata
```

## CI

GitLab CI (`.gitlab-ci.yml`) runs lint, tests, and a production build on every push/merge request targeting `main`.
