# ImageHub (Next.js)

A lightweight Next.js gallery app that serves images from `public/images` and drives the UI from a single data source in `src/app/data.ts`.

## Prerequisites

- Node.js 18+ (recommended)
- npm

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open http://localhost:3000

## Project structure (high level)

- `src/app/page.tsx` — homepage / gallery grid
- `src/app/gallery/[id]/page.tsx` — detail page per image
- `src/app/data.ts` — the `galleryItems` array (single source of truth)
- `public/images` — image assets served by Next.js

## Image pipeline (HEIC → JPG)

This repo includes a converter script and an agent “skill” that can fully automate the process.

### 1) Convert HEIC files

Put `.heic` files into your waiting folder and run:

```bash
npm run heic:convert
```

By default the converter reads from:

- `~/Downloads/waiting`

If you need a different directory, set `WAITING_DIR`:

```bash
WAITING_DIR="/path/to/your/waiting" npm run heic:convert
```

### 2) Move JPGs into the app

Copy new `.jpg` files into:

- `public/images/`

### 3) Register images in the gallery

Add a new entry to the `galleryItems` array in `src/app/data.ts`:

```ts
{
  id: "p108", // sequential
  src: "https://artwork-hub.vercel.app/images/your-image.jpg",
  alt: "Short readable title",
  ratio: 1.0,
  createtime: "2026-02-06",
  category: "animal", // fruit | figure | animal | plant | object | landscape
}
```

## Agent skills (Kilo Code)

This project contains Kilo Code “skills” under `.kilocode/skills/`.

### What’s a skill?

A skill is a markdown file that defines a repeatable workflow for the agent (commands to run + file edits to apply). In this repo, the `image-pipeline` skill can:

1. Convert HEIC → JPG
2. Copy new JPGs into `public/images/`
3. Append new entries into `src/app/data.ts`

### Where skills live

- `.kilocode/skills/<skill-name>/SKILL.md`

Example:

- `.kilocode/skills/image-pipeline/SKILL.md`

### How to add a new skill

1. Create a folder: `.kilocode/skills/my-skill/`
2. Add `SKILL.md` with frontmatter:

```md
---
name: my-skill
description: One-line description of what it automates.
---
```

3. Write the steps the agent should run (commands and/or file changes).

### How to run a skill

In Kilo Code, ask the agent to run the skill by name or point it at the skill file (for example: “run .kilocode/skills/image-pipeline/SKILL.md”).

## Scripts

- `npm run dev` — start Next.js
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — lint
- `npm run heic:convert` — convert HEIC → JPG in the waiting folder
