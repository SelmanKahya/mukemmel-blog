import { createPost, deletePost, updatePost } from "../../../src/db/posts";

export default async (req, res) => {
  try {
    // Handle POST request - Create a new post
    if (req.method === 'POST') {
      const { title, slug, content, date } = req.body;

      // Validate required fields
      if (!title || !slug || !content || !date) {
        return res.status(400).json({
          error: 'Missing required fields: title, slug, content, date'
        });
      }

      try {
        const newPost = createPost({ title, slug, content, date });
        return res.status(201).json({
          message: 'Post created successfully',
          post: newPost
        });
      } catch (error) {
        // Handle duplicate slug error
        if (error.message.includes('UNIQUE constraint failed')) {
          return res.status(409).json({
            error: 'A post with this slug already exists'
          });
        }
        throw error;
      }
    }

    // Handle DELETE request - Delete a post
    if (req.method === 'DELETE') {
      const { slug } = req.body;

      if (!slug) {
        return res.status(400).json({
          error: 'Missing required field: slug'
        });
      }

      const deleted = deletePost(slug);

      if (!deleted) {
        return res.status(404).json({
          error: 'Post not found'
        });
      }

      return res.status(200).json({
        message: 'Post deleted successfully',
        slug
      });
    }

    // Handle PUT request - Update a post
    if (req.method === 'PUT') {
      const { slug, title, content, date } = req.body;

      if (!slug || !title || !content || !date) {
        return res.status(400).json({
          error: 'Missing required fields: slug, title, content, date'
        });
      }

      const updatedPost = updatePost(slug, { title, content, date });

      if (!updatedPost) {
        return res.status(404).json({
          error: 'Post not found'
        });
      }

      return res.status(200).json({
        message: 'Post updated successfully',
        post: updatedPost
      });
    }

    // Method not allowed
    return res.status(405).json({
      error: `Method ${req.method} not allowed`
    });

  } catch (error) {
    console.error('Admin API error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
};
