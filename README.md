# Joseph B Antony - Portfolio & Blog

Personal portfolio and blog website built with Next.js, showcasing my experience as a Backend Software Engineer.

## Live Site

Visit: [joe-explr.github.io](https://joe-explr.github.io)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter
- **Language**: TypeScript
- **Deployment**: GitHub Pages (Static Export)

## Project Structure

```
joe-explr.github.io/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home (Portfolio/About)
│   │   ├── layout.tsx            # Root layout with Header/Footer
│   │   ├── globals.css           # Global styles
│   │   ├── projects/
│   │   │   ├── page.tsx          # Projects list
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual project page
│   │   └── blog/
│   │       ├── page.tsx          # Blog list
│   │       └── [slug]/
│   │           └── page.tsx      # Individual blog post
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── BlogCard.tsx
│   │   └── ...
│   └── lib/
│       └── content.ts            # Content utilities
├── content/
│   ├── projects/                 # Project markdown files
│   │   ├── distributed-system.md
│   │   └── ...
│   └── blog/                     # Blog post markdown files
│       ├── welcome.md
│       └── ...
├── public/
│   └── Joseph_CV_Backend.pdf     # Resume
└── package.json
```

## Features

- Responsive, modern design
- Markdown-based content management
- SEO optimized with meta tags
- Static site generation for fast loading
- Dynamic routing for projects and blog posts

## Adding Content

### Add a New Project

Create a new `.md` file in `content/projects/`:

```markdown
---
title: "Project Title"
description: "Brief description"
tags: ["Tag1", "Tag2"]
date: "2024-01-01"
---

Your project content here...
```

### Add a New Blog Post

Create a new `.md` file in `content/blog/`:

```markdown
---
title: "Post Title"
description: "Brief description"
date: "2024-01-01"
---

Your blog content here...
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

## Deployment

The site is automatically deployed to GitHub Pages on push to `main` branch via GitHub Actions.

To deploy manually:

```bash
npm run build
# The 'out' directory contains the static site
```

## License

MIT
