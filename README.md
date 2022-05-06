# A statically generated blog example using Next.js, Markdown, and TypeScript

This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/blog-starter-typescript)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript&project-name=blog-starter-typescript&repository-name=blog-starter-typescript)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example blog-starter-typescript blog-starter-typescript-app
# or
yarn create next-app --example blog-starter-typescript blog-starter-typescript-app
# or
pnpm create next-app -- --example blog-starter-typescript blog-starter-typescript-app
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

`blog-starter-typescript` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).


Credits

Video by <a href="https://pixabay.com/users/hirshphilippe-3632036/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=31140">hirshphilippe</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=31140">Pixabay</a>

Video by Joseph  Redfield: https://www.pexels.com/video/two-vehicles-traveling-in-the-desert-2099568/

Video by <a href="https://pixabay.com/users/wowfactorfilms-13980848/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=28039">wowfactorfilms</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=28039">Pixabay</a>

Photo by Евгений Качин: https://www.pexels.com/photo/a-green-beetle-car-on-the-road-9940949/
Photo by Ahmad Ramadan: https://www.pexels.com/photo/red-volkswagen-beetle-parked-at-road-side-near-pedestrian-lane-131811/
Photo by lilartsy: https://www.pexels.com/photo/yellow-volkswagen-beetle-coupe-parked-on-gray-concrete-surface-1461804/
Photo by murat soyluoglu: https://www.pexels.com/photo/photography-of-orange-volkswagen-beetle-1209774/


## Resources

https://demo.cloudinary.com/product-gallery/

https://cloudinary.com/blog/introducing_the_cloudinary_product_gallery_enabling_a_dynamic_buyer_experience

rich media: https://cloudinary.com/blog/why_dynamic_media_platform_is_must_have_for_ecommerce



