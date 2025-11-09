import { getPostBySlug } from "../../../src/db/posts";

export default (req, res) => {
  try {
    const post = getPostBySlug(req.query.postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Transform database post to match the frontend expected format
    const formattedPost = {
      title: post.title,
      slug: post.slug,
      details: post.content,
      date: post.date
    };

    res.json({ post: formattedPost });
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
};
