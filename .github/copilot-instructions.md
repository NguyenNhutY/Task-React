# Copilot / AI Agent Instructions 🤖

Quick, targeted guidance for working across the multi-project monorepo (Task_Custom_Hook, Task1..Task6). Use this as the single place to find how to run, build, and modify parts of the codebase and where to look for typical patterns and secrets.

---

## Repo layout & big-picture

- Top-level contains multiple **independent apps** in subfolders:
  - `Task_Custom_Hook/` — Vite + React minimal template (dev: `vite`)
  - `Task1/` — Create React App (CRA) project (dev: `react-scripts start`)
  - `Task2/` — React client + **Express server** in `server/` (Massive/Postgres + Auth0 integration)
  - `Task3/`, `Task4/`, `Task5/` — Next.js apps (TypeScript in places, Tailwind, Next 14)
  - `Task6/` — miscellaneous / experiments

Why this matters: each subproject is a self-contained app with its own scripts, linting, and build process. Pick the directory that corresponds to the feature you’re editing and run scripts in that folder.

---

## How to start & build (examples) ✅

- Task_Custom_Hook (Vite):
  - cd `Task_Custom_Hook` && `npm install` && `npm run dev` (default Vite port: 5173)
  - `npm run build` / `npm run preview`

- Task1 / Task2 client (CRA):
  - cd `Task1` or `Task2` && `npm install` && `npm start` (CRA serves on :3000)
  - `npm test` runs existing CRA tests

- Task2 server (Express):
  - `cd Task2/server` then run `node index.js` (server listens on port 80 in source)
  - NOTE: server depends on `config_server.js` (contains `MASSIVE_URI`, Auth0 settings, `mySecret`) — this file is **gitignored** and must be created locally. See `Task2/.gitignore`.

- Next.js apps (Task3/Task4/Task5):
  - cd into project and `npm install` then `npm run dev` (Next default port: 3000)
  - `npm run build` and `npm start` for production
  - `npm run lint` available (uses `eslint-config-next`)

- Deploy hints:
  - `Task4` includes a `deploy` script: `vercel --prod`.

---

## Key files & places to inspect 🔧

- Vite app: `Task_Custom_Hook/`
  - `vite.config.js`, `eslint.config.js`, `src/hooks/` (e.g. `useToggle`) — small, focused examples of custom hooks and lint config

- CRA apps: `Task1/`, `Task2/` (client)
  - `src/`, `public/`, `src/App.test.js` (tests)

- Server: `Task2/server/`
  - `index.js` — express routes, controllers, Auth0 strategy, db (massive) init
  - `controllers/` — server controllers (favorites, notes, etc.)
  - `config_server.js` is intentionally ignored (secrets)

- Next apps: `Task3/`, `Task4/`, `Task5/`
  - `app/` directory (Next app router), `components/`, `data/`, `tailwind.config.*`, `tsconfig.json` (when present)

---

## Project-specific conventions & patterns 🧭

- Each project uses its own linting / formatting setup:
  - `Task_Custom_Hook` uses `eslint.config.js` + `eslint-plugin-react-refresh` for Vite
  - Next projects use `eslint-config-next`; `Task5` includes Prettier + `prettier-plugin-tailwindcss`

- TypeScript is used in some Next projects — check `tsconfig.json` before adding `.ts/.tsx` files.
- Server auth and DB details are kept out of the repo; look for `.gitignore` entries: `config_server.js`, `*.env*`.

---

## Common pitfalls & gotchas ⚠️

- Task2 server listens on port 80 (requires privileges). Either change the port for local development or run with appropriate permissions.
- Missing `config_server.js` or env vars will break server startup — do not commit secrets.
- Multiple apps mean you may need to run two processes simultaneously (client + server) for full end-to-end workflows.

---

## Where to add tests & how they run 🧪

- CRA projects include tests (`npm test` uses react-scripts test). Prefer adding tests nearby components (e.g., `src/__tests__` or `*.test.js`).
- Next apps currently have no standardized test setup in this repo — add tests per-app (Jest/React Testing Library or Playwright for E2E).

---

## What to check in a PR 📋

- Run the app locally using the project's `npm run dev` or equivalent.
- Run `npm run lint` where available and ensure formatting rules are satisfied.
- If you touched server code, verify environment variables and create or update example `config_server.example.js` (without secrets).
- For Next apps, check production build with `npm run build`.

---

## Example quick tasks (copy-paste) 💡

- Start Vite app:

  cd Task_Custom_Hook
  npm install
  npm run dev

- Start Task2 full stack (client + server):

  # server
  cd Task2/server
  node index.js

  # client
  cd ../
  npm start

---

If anything here is unclear or you want additional examples (common refactors, test templates, or how to wire CI), tell me which project and I'll expand this file. ✅
