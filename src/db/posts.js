const { getDb } = require('./index');

// Get all posts
function getAllPosts() {
  const db = getDb();
  const stmt = db.prepare('SELECT * FROM posts ORDER BY created_at DESC');
  return stmt.all();
}

// Get a single post by slug
function getPostBySlug(slug) {
  const db = getDb();
  const stmt = db.prepare('SELECT * FROM posts WHERE slug = ?');
  return stmt.get(slug);
}

// Get a single post by ID
function getPostById(id) {
  const db = getDb();
  const stmt = db.prepare('SELECT * FROM posts WHERE id = ?');
  return stmt.get(id);
}

// Create a new post
function createPost(postData) {
  const { title, slug, content, date } = postData;
  const db = getDb();

  const stmt = db.prepare(`
    INSERT INTO posts (title, slug, content, date)
    VALUES (?, ?, ?, ?)
  `);

  const result = stmt.run(title, slug, content, date);
  return getPostById(result.lastInsertRowid);
}

// Update an existing post
function updatePost(slug, postData) {
  const { title, content, date } = postData;
  const db = getDb();

  const stmt = db.prepare(`
    UPDATE posts
    SET title = ?, content = ?, date = ?, updated_at = CURRENT_TIMESTAMP
    WHERE slug = ?
  `);

  const result = stmt.run(title, content, date, slug);

  if (result.changes === 0) {
    return null;
  }

  return getPostBySlug(slug);
}

// Delete a post by slug
function deletePost(slug) {
  const db = getDb();
  const stmt = db.prepare('DELETE FROM posts WHERE slug = ?');
  const result = stmt.run(slug);
  return result.changes > 0;
}

module.exports = {
  getAllPosts,
  getPostBySlug,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
