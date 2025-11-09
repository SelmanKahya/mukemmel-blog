# Database Documentation

## Overview

This blog application now uses **SQLite** database instead of markdown files to manage blog posts. This provides better performance, easier management, and enables dynamic CRUD operations through API endpoints.

## Database Schema

### Posts Table

| Column | Type | Description |
|--------|------|-------------|
| `id` | INTEGER | Primary key (auto-increment) |
| `title` | TEXT | Post title |
| `slug` | TEXT | URL-friendly unique identifier |
| `content` | TEXT | Post content (markdown format) |
| `date` | TEXT | Publication date (Turkish format) |
| `created_at` | DATETIME | Record creation timestamp |
| `updated_at` | DATETIME | Record update timestamp |

## Database Location

The SQLite database file is stored at: `blog.db` (in the project root directory)

**Note:** The database file is gitignored and will not be committed to the repository.

## Migration

### Initial Migration from Markdown Files

To migrate existing markdown posts to the database, run:

```bash
npm run migrate
```

This script will:
- Read all markdown files from `/src/posts/`
- Create database entries with metadata from `/src/blog-posts.js`
- Preserve the original content and metadata

## API Endpoints

### Public Endpoints

#### Get All Posts
```bash
GET /api/posts
```

**Response:**
```json
{
  "posts": [
    {
      "title": "Post Title",
      "slug": "post-slug",
      "details": "Post content in markdown...",
      "date": "5 Aralık 2019"
    }
  ]
}
```

#### Get Single Post
```bash
GET /api/post/[slug]
```

**Example:**
```bash
GET /api/post/yarisma
```

**Response:**
```json
{
  "post": {
    "title": "Post Title",
    "slug": "post-slug",
    "details": "Post content in markdown...",
    "date": "5 Aralık 2019"
  }
}
```

### Admin Endpoints

#### Create New Post
```bash
POST /api/admin/posts
Content-Type: application/json

{
  "title": "New Post Title",
  "slug": "new-post-slug",
  "content": "Post content in markdown format...",
  "date": "9 Kasım 2025"
}
```

**Response (201 Created):**
```json
{
  "message": "Post created successfully",
  "post": {
    "id": 4,
    "title": "New Post Title",
    "slug": "new-post-slug",
    "content": "Post content...",
    "date": "9 Kasım 2025",
    "created_at": "2025-11-09 09:00:00",
    "updated_at": "2025-11-09 09:00:00"
  }
}
```

#### Update Existing Post
```bash
PUT /api/admin/posts
Content-Type: application/json

{
  "slug": "existing-post-slug",
  "title": "Updated Title",
  "content": "Updated content...",
  "date": "9 Kasım 2025"
}
```

**Response (200 OK):**
```json
{
  "message": "Post updated successfully",
  "post": { ... }
}
```

#### Delete Post
```bash
DELETE /api/admin/posts
Content-Type: application/json

{
  "slug": "post-to-delete"
}
```

**Response (200 OK):**
```json
{
  "message": "Post deleted successfully",
  "slug": "post-to-delete"
}
```

## Usage Examples

### Using cURL

**Create a new post:**
```bash
curl -X POST http://localhost:3000/api/admin/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Yeni Yazı",
    "slug": "yeni-yazi",
    "content": "Bu yeni bir blog yazısı.\n\n**Kalın yazı**",
    "date": "9 Kasım 2025"
  }'
```

**Delete a post:**
```bash
curl -X DELETE http://localhost:3000/api/admin/posts \
  -H "Content-Type: application/json" \
  -d '{"slug": "yeni-yazi"}'
```

### Using JavaScript Fetch API

**Create a new post:**
```javascript
fetch('/api/admin/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Yeni Yazı',
    slug: 'yeni-yazi',
    content: 'Bu yeni bir blog yazısı.\n\n**Kalın yazı**',
    date: '9 Kasım 2025'
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

**Delete a post:**
```javascript
fetch('/api/admin/posts', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    slug: 'yeni-yazi'
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

## Database Management

### Direct Database Access

You can access the database directly using SQLite CLI:

```bash
sqlite3 blog.db
```

**Useful queries:**
```sql
-- List all posts
SELECT * FROM posts;

-- Get post by slug
SELECT * FROM posts WHERE slug = 'yarisma';

-- Delete a post
DELETE FROM posts WHERE slug = 'post-slug';
```

### Backup Database

To backup your database:
```bash
cp blog.db blog.db.backup
```

### Reset Database

To reset the database and re-migrate:
```bash
rm blog.db
npm run migrate
```

## Code Structure

### Database Initialization
- **File:** `/src/db/index.js`
- Initializes SQLite connection
- Creates tables on first run
- Uses WAL mode for better performance

### CRUD Operations
- **File:** `/src/db/posts.js`
- Contains all database operations:
  - `getAllPosts()` - Get all posts
  - `getPostBySlug(slug)` - Get single post
  - `createPost(postData)` - Create new post
  - `updatePost(slug, postData)` - Update existing post
  - `deletePost(slug)` - Delete post

### API Routes
- **Public:** `/pages/api/posts.js` and `/pages/api/post/[postId].js`
- **Admin:** `/pages/api/admin/posts.js`

## Security Considerations

**Important:** The admin endpoints currently have **no authentication**. In a production environment, you should:

1. Add authentication middleware
2. Implement user sessions
3. Add rate limiting
4. Validate and sanitize all inputs
5. Use HTTPS
6. Add CORS headers appropriately

## Troubleshooting

### Database locked error
If you get "database is locked" errors, make sure:
- Only one process is accessing the database
- WAL mode is enabled (done automatically)
- No long-running transactions

### Migration fails
If migration fails:
1. Check that markdown files exist in `/src/posts/`
2. Verify file permissions
3. Check console for specific error messages

### Posts not showing
1. Verify database exists: `ls -la blog.db`
2. Check database content: `sqlite3 blog.db "SELECT COUNT(*) FROM posts;"`
3. Check server logs for errors
