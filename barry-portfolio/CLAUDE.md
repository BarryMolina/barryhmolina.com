# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start development server (Next.js 15 on port 3000)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint with Next.js config

### Deployment (Cloudflare)
- `pnpm deploy` - Build and deploy to Cloudflare using OpenNext
- `pnpm preview` - Build and preview deployment locally
- `pnpm cf-typegen` - Generate Cloudflare environment types

## Architecture

This is a Next.js 15 portfolio site with App Router, deployed to Cloudflare using OpenNext.

### Key Technologies
- **Next.js 15** with App Router and React 19
- **TypeScript** with strict mode
- **Tailwind CSS v4** for styling
- **Motion** (modern Framer Motion) for animations
- **MDX** for blog content with `@next/mdx`
- **Radix UI** components with shadcn/ui styling
- **OpenNext** for Cloudflare deployment
- **Geist** fonts (Sans & Mono)

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components (main sections + UI components)
- `src/components/ui/` - shadcn/ui components with Radix UI
- `src/blog/` - MDX blog posts
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `public/` - Static assets and Cloudflare headers

### Animation System
The site uses a custom scroll animation system built with Motion:
- `ScrollAnimation` - Single element animations on scroll
- `StaggeredAnimation` - Staggered animations for lists/grids
- Pre-built animations: fadeUp, fadeIn, slideInLeft, slideInRight, scaleIn, rotateIn
- Respects `prefers-reduced-motion` for accessibility

### Styling Conventions
- Uses Tailwind CSS v4 with custom CSS variables
- shadcn/ui component variants with `class-variance-authority`
- Responsive design with mobile-first approach
- Dark/light theme support via CSS variables

### Path Aliases
- `@/*` maps to `src/*` (configured in tsconfig.json)

### MDX Configuration
- Blog posts in `src/blog/` directory
- MDX components configured in `mdx-components.tsx`
- Blog routes at `/blog/[slug]` with custom layout

### Deployment Notes
- Uses OpenNext for Cloudflare compatibility
- Cloudflare environment types in `cloudflare-env.d.ts`
- Custom headers configuration in `public/_headers`
- Development mode includes Cloudflare context via `initOpenNextCloudflareForDev()`