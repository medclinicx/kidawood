# Kidawood.com

The website for Kidawood, an English-language information site for readers in the United States. It covers two subjects in separate sections: the stock market and investing, and stock and inventory management software.

Built with Next.js (App Router) and TypeScript, with plain CSS. Articles are managed in Sanity. Hosting is Vercel.

## Running the site locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To check a production build:

```bash
npm run build
npm run start
```

## How articles are published

Articles are read from Sanity through its HTTP query API, using plain fetch. There is no Sanity SDK in the Next.js app. The reading code is in `lib/sanity.ts`.

Until a Sanity project is connected, the site uses the starter articles stored in `lib/articles.ts`. The fallback also applies if the Sanity query fails or returns nothing, so the site always builds and runs.

### 1. Create the Sanity project

1. Go to sanity.io and create a free account if you do not have one.
2. Create a new project. Choose the clean project template with no predefined content if asked.
3. Add a dataset named `production` if the project does not already have one.
4. Note the project ID shown in the project dashboard.

### 2. Connect the website to Sanity

Copy `.env.example` to `.env.local` and fill in the project ID:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

Restart the dev server after changing the file. In Sanity project settings, under API and CORS origins, add the origins the site will be read from, for example `http://localhost:3000` for local work and `https://www.kidawood.com` for the live site.

### 3. Run the Studio

The Studio project lives in the `sanity` folder and has its own dependencies:

```bash
cd sanity
cp .env.example .env   # then set SANITY_STUDIO_PROJECT_ID to the same project ID
npm install
npm run dev
```

In the Studio:

- Create one Author document named Kidawood Editorial Team. Articles are published under that byline. Do not add invented people.
- Create the four Category documents with the slugs `stocks`, `investing`, `stock-management` and `finance`.
- Write articles with the Article document type. Field names in the schema match the site code, so a published article appears on the site as written. The featured image is set through the Featured image URL field, using a public URL such as a file in the site's `public/images` folder.
- Set an article's status to Published when it is ready. Drafts are not shown on the site.

## Deploying to Vercel

1. Push this project to the GitHub repository.
2. In Vercel, import the repository as a new project. The framework preset is Next.js and no special build settings are needed.
3. In the Vercel project settings, under Environment Variables, add `NEXT_PUBLIC_SANITY_PROJECT_ID` with the Sanity project ID, and `NEXT_PUBLIC_SANITY_DATASET` with the value `production`.
4. Deploy. After the first deployment works on the Vercel address, attach the domain kidawood.com in the project domain settings and follow the DNS steps Vercel shows if the domain's nameservers are not already pointed at Vercel.

The `sanity` folder is a separate application. It is excluded from the site's TypeScript checks and is not deployed by Vercel as part of this project. Run it locally, or deploy it on its own later with `npm run deploy` inside the `sanity` folder.

## Structure

- `app/` — pages: home, blog index and article pages, the four category hubs (`/stocks`, `/investing`, `/stock-management`, `/finance`), about, contact, the `/studio` information page, the legal pages, plus `sitemap.ts` and `robots.ts`.
- `components/` — header, footer, article card, category hub and legal page templates.
- `lib/articles.ts` — the article type, the four categories and the local starter articles.
- `lib/sanity.ts` — Sanity reading with the local fallback.
- `lib/legal.ts` — the text of the legal and policy pages.
- `public/images/` — featured images for the starter articles.
- `sanity/` — the Sanity Studio project and the article, author and category schemas.

## Editorial rules for this site

Articles follow the house writing standard: plain, natural, professional English, short sentences, no invented figures, prices, testimonials or people. Financial articles carry the financial disclaimer and explain risks in the text, not only at the end.
