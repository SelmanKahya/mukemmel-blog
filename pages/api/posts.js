import { getAllPosts } from "../../src/db/posts";

export default async (req, res) => {
  try {
    const posts = getAllPosts();
    // Transform database posts to match the frontend expected format
    const formattedPosts = posts.map(post => ({
      title: post.title,
      slug: post.slug,
      details: post.content,
      date: post.date
    }));
    res.json({ posts: formattedPosts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};
