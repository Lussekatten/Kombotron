This is a [Next.js (ver 15.2.4)](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---- Upgrades history ---
01-April-2025
Added two keys to the .env.local file (related to the uploadthing module/library)

03-April-2025
1. Routes created
2. JSON file created and uploaded to uploadthing cloud
3. Figuring out how to read the JSON file contents in my application.
4. I actually did not need the uploadthing module since I am only interested in READING data from a local JSON file.
5. Test successfull. Now we have JSON data we can process.
6. While stuck, I started to work on the menus, styling them with basic css.
7. Basic styling "Top menu" and "Statistik sub menu" done.

04-April-2025
1. Adjusted responsivity (a bit) for small displays