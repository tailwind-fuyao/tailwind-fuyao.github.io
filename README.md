This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install dependencies first:

```bash
pnpm install
# When prompted by pnpm approve-builds, select ALL packages (press `a` then Enter)
```

Then run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

This site is configured for static export and deployment to [GitHub Pages](https://docs.github.com/en/pages).

### GitHub Pages setup

1. Push this repository to GitHub.
2. Open the repository Settings → Pages.
3. Set the source to GitHub Actions.
4. Any push to the main branch will trigger the deployment workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

### Local build

```bash
pnpm build
```

The static export is generated in the out directory.
