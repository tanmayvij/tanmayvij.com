# tanmayvij.com

Personal site for Tanmay Vij, Lead Software Engineer. Live at [tanmayvij.com](https://tanmayvij.com).

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- [next-themes](https://github.com/pacocoursey/next-themes) for the light/dark toggle
- [lucide-react](https://lucide.dev) icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project structure

```
src/
  app/                  App Router entry — layout.tsx, page.tsx, globals.css
  components/           Shared UI — nav, terminal, theme toggle/provider, reveal, etc.
  components/sections/  Page sections — hero, pillars, proof, background, skills,
                         architecture, testimonials, personal, footer
  data/site.ts           Single source of truth for all site copy (typed SITE object)
public/                 Static assets
```

All page content — copy, metrics, skills, testimonials, social links — lives in `src/data/site.ts`. Most content changes only require editing that file, not the components.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build for production |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Contact

- Email: [hello@tanmayvij.com](mailto:hello@tanmayvij.com)
- LinkedIn: [/in/tanmayvij](https://www.linkedin.com/in/tanmayvij)
- GitHub: [@tanmayvij](https://github.com/tanmayvij)
- X: [@tanmay_vij](https://x.com/tanmay_vij)
- Stack Overflow: [tanmay-vij](https://stackoverflow.com/users/3970251/tanmay-vij)
- npm: [~tanmayvij](https://www.npmjs.com/~tanmayvij)
