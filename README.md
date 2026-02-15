# Portfolio (Next.js 16)

Personal portfolio rebuilt on the latest stable **Next.js 16** with App Router, React 19, and TypeScript.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- CSS (modular page styles + shared base styles)
- Lucide React icons

## Pages

- `/` Home
- `/about`
- `/projects`
- `/connect`

## Local Development

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Scripts

```bash
npm run dev     # start dev server
npm run lint    # run ESLint
npm run build   # production build
npm run start   # run production server
```

## Project Structure

```text
src/
  app/           # App Router pages and layout
  components/    # Reusable UI components
  constants/     # Static content/config
  data/          # Data models/content
  styles/        # Global + page styles
  utils/         # Utility helpers
public/          # Static assets
```

## Notes

- This repo is actively iterated.
- If you reuse parts of this project, attribution is appreciated.
