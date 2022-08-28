import rss from "@astrojs/rss";

import { SITE } from "~/config.mjs";
import { fetchPosts } from "~/utils/fetchPosts";

const posts = await fetchPosts();

export const get = () =>
  rss({
    title: `${SITE.name}`,
    description:
      "We help businesses innovate & grow",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: `blog/${post.slug}`,
      title: post.title,
      description: post.description,
      pubDate: post.pubDate,
    })),
  });
