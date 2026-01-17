# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

launch.css is a classless CSS framework that styles semantic HTML elements directly without requiring class names. It uses ARIA attributes and data attributes for component styling and layout control.

## Commands

```bash
# Root level (monorepo)
pnpm dev          # Start dev servers for all packages
pnpm build        # Build all packages
pnpm test         # Run tests (publint validation)
pnpm format       # Format code with dprint
pnpm lint         # Check formatting with dprint

# Core package (packages/main)
cd packages/main
pnpm dev          # Watch-compile Sass: src/_index.scss → dist/index.css
pnpm build        # Compile compressed CSS

# Documentation (apps/docs)
cd apps/docs
pnpm dev          # Start Vite dev server
pnpm build        # Build static site
```

## Architecture

**Monorepo Structure:**

- `packages/main/` - Core CSS framework (published to npm as `launch.css`)
- `apps/docs/` - Documentation website (Vite + Handlebars + HTMX)
- `examples/website/` - Example implementation

**Sass Organization** (`packages/main/src/`):

- `_index.scss` - Main entry point, imports all modules
- `_variables.scss` - CSS custom properties (colors, fonts, spacing)
- `_global.scss` - Global resets and base styles
- `layouts/` - Website and dashboard layout styles
- `compoments/` - Component styles (note: intentional spelling)
- `partials/_breakpoints.scss` - Media query breakpoints

## Core Concepts

**Classless Design:** Styles target semantic HTML elements, ARIA roles/attributes, and data attributes. No CSS classes.

**Theme System:** Uses CSS `color-scheme` property with `light-dark()` function. No JavaScript theme switching required.

```css
color-scheme: only dark; /* Force dark */
color-scheme: only light; /* Force light */
color-scheme: light dark; /* Auto based on OS preference */
```

**Layouts:** Controlled via `data-layout` attribute on `<body>`:

- `website` - Standard header/main/footer layout
- `dashboard` - Fixed header app layout

**Button Variants:** Styled via ARIA labels (not classes):

- Default: `<button>Primary</button>`
- Secondary: `aria-label` contains "cancel", "back", or "close"
- Danger: `aria-label` contains "delete", "remove", "discard", "erase", "destroy", or "clear"

## Adding Components

1. Create Sass file in `packages/main/src/compoments/` (match existing naming)
2. Import in `packages/main/src/compoments/_index.scss`
3. Use semantic HTML selectors, ARIA attributes, or `data-*` attributes (no classes)
4. Use variables from `_variables.scss` for colors/spacing
5. Test with `pnpm dev` in root directory

## LLM Reference

See `apps/docs/public/llm.txt` for component HTML patterns and ARIA attribute reference.
