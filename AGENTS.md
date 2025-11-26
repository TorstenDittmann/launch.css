# Repository Guidelines

Concise guide for contributing to `launch.css`. Keep changes minimal, readable, and aligned with the classless CSS philosophy.

## Project Structure & Module Organization
- `packages/main`: Core framework. Sass sources live in `src/` (partials prefixed with `_`); compiled CSS in `dist/`.
- `apps/docs`: Vite-powered docs site. Use it to preview component changes and documentation updates.
- `examples/website`: Minimal Vite example consuming the package.
- Root configs: `dprint.json` for formatting, `bun.lock`/`package.json` for workspace tooling, `cover.jpeg` for branding assets.

## Setup, Build, and Development Commands
- Install dependencies: `bun install`.
- Build everything: `bun run build` (delegates to workspace scripts via `wsu`).
- Local dev (all workspaces): `bun run dev` to run available `dev` scripts (Sass watch in `packages/main`, Vite dev server in docs/examples).
- Lint/format: `bun run lint` to check formatting; `bun run format` to apply `dprint`.
- Tests: `bun run test` (runs workspace tests such as `publint` for the package).

## Coding Style & Naming Conventions
- Formatting: tabs with width 4 (`dprint` enforced). Run `bun run format` before pushing.
- Sass: keep specificity low; target semantic elements/ARIA instead of custom classes. Reuse tokens from `src/_variables.scss`; prefer mixins over repetition.
- Files: new partials should be named `_feature.scss` and imported in `_index.scss`; keep public API limited to compiled `dist/index.css`.
- JS/TS (docs/examples): ES modules, concise imports, single-responsibility utilities; keep Vite configs minimal.

## Testing Guidelines
- For visual changes, verify in `apps/docs` and `examples/website` across light/dark themes and both `data-layout` modes (`website`, `dashboard`).
- No hard coverage target; favor small, verifiable changes and manual spot checks for regressions.

## Commit & Pull Request Guidelines
- Commits: short, imperative summaries (e.g., `Fix spacing for cards`); scope one logical change per commit; reference issues with `#id` when applicable.
- PRs: include a concise summary, testing notes (commands run), and before/after screenshots or links for UI-affecting changes. Update README/docs when behavior or APIs change.
- Keep branches up to date with `main` and resolve conflicts locally; avoid force-pushing shared branches.
