# Gaurang Gujrati — Portfolio

A personal portfolio website showcasing my work experience, projects, skills, and blog posts.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Newsreader (serif), DM Sans (sans-serif)
- **Blog:** Markdown with gray-matter & react-markdown

## Features

- Responsive design with mobile-first approach
- Light/dark theme toggle with system preference detection
- Animated hero section with subtle textures
- Work experience timeline
- Project showcase with live demo links
- GitHub contribution chart
- Skills categorization
- Education section
- Markdown-powered blog with syntax highlighting
- SEO optimized with Open Graph metadata

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Gaurang105/gaurang-portfolio.git
cd gaurang-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── blog/              # Blog pages
│   │   ├── [slug]/        # Dynamic blog post routes
│   │   └── page.tsx       # Blog listing page
│   ├── components/        # React components
│   │   ├── GitHubChart.tsx
│   │   ├── Navigation.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   ├── globals.css        # Global styles & Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── lib/
│   └── blog.ts            # Blog utilities
├── posts/                 # Markdown blog posts
└── public/
    └── images/            # Static images
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Adding Blog Posts

Create a new `.md` file in the `posts/` directory with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-01-19"
excerpt: "A brief description of the post"
---

Your content here...
```

## Deployment

The site can be deployed to Vercel, Netlify, or any platform that supports Next.js.

```bash
npm run build
```

## License

MIT

## Contact

- Email: gujratigaurang@gmail.com
- LinkedIn: [gaurang-gujrati](https://www.linkedin.com/in/gaurang-gujrati-088a931b8/)
- GitHub: [@Gaurang105](https://github.com/Gaurang105)
- Twitter: [@GaurangGujrati](https://x.com/GaurangGujrati)
