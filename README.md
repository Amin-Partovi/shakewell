This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## how to use
each link in the root page navigate you to the assignment's tasks

### task 1
**products **navigate to the /products/0 which is the static page for product 0. you can change the id in the address bar and have access to it's specific product. e.g. /products/5 render HTML for the product 5.

list of the products is a json file, and the data is readed synchronously. the page will be generate every 10 seconds.

the performance is optimal but build time is not optimized as all the 5000 product pages are generated in build time. If we use fallback true and cache smaller number of pages we can have shorter build time. 

### task 2
a list of cards is provided in the /items and it is also available through the card items navigation button. there are a title and an image in each card.

**Styled Components:** all the styling in this task is implemented by styled component approach, and it is responsive too.

**tests:** two test are considered for this task which evaluate the existance of the image and title in each Card.

### task 3
tabs component takes activeTab and tabs props and strict **type safety** is considered for this component.

**tests:** two tests are considered for this task it should throw an error if activeTab is not available in the keys of tabs, and should not throw an error if activeTab is available in the keys of tabs

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
