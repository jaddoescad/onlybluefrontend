# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.1.6 application using React 19, TypeScript, Tailwind CSS 4, and Prisma ORM 7.3.0 with PostgreSQL. It follows the App Router architecture.

## Commands

### Development
```bash
npm run dev          # Start development server at http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Prisma Database Operations
```bash
npx prisma generate  # Generate Prisma Client (outputs to app/generated/prisma)
npx prisma migrate dev --name <name>  # Create and apply migration
npx prisma migrate deploy             # Apply migrations in production
npx prisma studio                     # Open Prisma Studio GUI
npx prisma db push                    # Sync schema without migrations
npx prisma db seed                    # Run seed script
```

## Architecture

### Next.js App Router Structure
- **app/** - App Router directory with file-based routing
  - **layout.tsx** - Root layout with Geist fonts (sans and mono)
  - **page.tsx** - Home page component
  - **globals.css** - Global Tailwind styles
  - **generated/prisma/** - Generated Prisma Client location (custom output path)

### Prisma Configuration
- **prisma/schema.prisma** - Database schema definition
- **prisma.config.ts** - Prisma configuration using `defineConfig()` (reads DATABASE_URL from .env)
- **Prisma Client output** - Generated to `app/generated/prisma` instead of default `node_modules/@prisma/client`
- **Database** - PostgreSQL (connection string required in DATABASE_URL environment variable)

### TypeScript Configuration
- **Path alias**: `@/*` maps to repository root
- **Target**: ES2017
- **JSX**: react-jsx
- **Module resolution**: bundler

### Styling
- Tailwind CSS 4 with PostCSS integration
- Dark mode support via `dark:` prefix
- Geist font family (sans and mono variants) from next/font/google

## Key Technical Details

### Importing Prisma Client
Since the Prisma Client is generated to a custom location, import it as:
```typescript
import { PrismaClient } from '@/app/generated/prisma';
```

### Environment Variables
Required in `.env` file:
- `DATABASE_URL` - PostgreSQL connection string

### ESLint Configuration
Uses Next.js recommended configs:
- eslint-config-next/core-web-vitals
- eslint-config-next/typescript
- Ignores: .next/, out/, build/, next-env.d.ts
