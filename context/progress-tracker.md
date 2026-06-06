# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- In progress: design system and UI primitives

## Current Goal

- Install and configure shadcn/ui components for the dark theme design system.

## Completed

- None yet.

## In Progress

- Implementing `Button`, `Card`, `Dialog`, `Input`, `Tabs`, `Scroll Area`, and `Textarea` components.
- Adding dark theme CSS variables and Tailwind theme mapping.

## Next Up

- Wire the new UI primitives into the app and validate imports.

## Open Questions

- None.

## Architecture Decisions

- Use Tailwind v4 `@theme inline` with CSS variables for dark theme tokens.
- Create a shared `cn()` utility in `lib/utils.ts` for component class merging.

## Session Notes

- The project uses Next.js app router and Tailwind v4 with `@tailwindcss/postcss`.
