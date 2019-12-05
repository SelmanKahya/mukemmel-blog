import { getPosts } from "../../../src/blog-posts";

const posts = getPosts();

export default (req, res) => {
  const post = posts.find(post => post.slug === req.query.postId);
  if (!post) {
    return res.json({
      post: {
        title: "NOT FOUND 404"
      }
    });
  }
  res.json({
    post
  });
};
