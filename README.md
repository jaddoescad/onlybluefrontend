This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Docker Setup

This project includes Docker configuration for easy deployment and development.

### Development with Docker

Start the entire stack (PostgreSQL + Next.js app):

```bash
docker compose up
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Docker Commands

```bash
# Build and start containers
docker compose up --build

# Run in detached mode
docker compose up -d

# Stop containers
docker compose down

# Stop and remove volumes (WARNING: deletes database data)
docker compose down -v

# View logs
docker compose logs -f app
```

### Database Access

PostgreSQL is accessible at `localhost:5432` with credentials:
- User: `postgres`
- Password: `postgres`
- Database: `onlyblue`

Connect using:
```bash
docker compose exec postgres psql -U postgres -d onlyblue
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
