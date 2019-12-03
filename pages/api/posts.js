import { getPosts } from "../../src/blog-posts";

const posts = getPosts();

export default async (req, res) => {
  res.json({ posts });
};
