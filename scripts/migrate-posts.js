const fs = require('fs');
const path = require('path');
const { createPost } = require('../src/db/posts');
const { getDb, closeDb } = require('../src/db');

// Migration data from blog-posts.js
const postsToMigrate = [
  {
    title: "1500TL ödül! Sen de yarışmaya katıl!",
    slug: "yarisma",
    mdFile: "yarisma.md",
    date: "5 Aralık 2019"
  },
  {
    title: "Örnek yazı",
    slug: "ornek-yazi",
    mdFile: "ornek-yazi.md",
    date: "3 Aralık 2019"
  },
  {
    title: "Merhaba dünya!",
    slug: "merhaba",
    mdFile: "merhaba.md",
    date: "1 Aralık 2019"
  }
];

function migratePost(postMeta) {
  const mdPath = path.join(__dirname, '..', 'src', 'posts', postMeta.mdFile);

  try {
    // Read markdown file content
    const content = fs.readFileSync(mdPath, 'utf-8');

    // Create post in database
    const newPost = createPost({
      title: postMeta.title,
      slug: postMeta.slug,
      content: content,
      date: postMeta.date
    });

    console.log(`✓ Migrated: ${postMeta.title} (${postMeta.slug})`);
    return newPost;
  } catch (error) {
    console.error(`✗ Failed to migrate ${postMeta.slug}:`, error.message);
    return null;
  }
}

function runMigration() {
  console.log('Starting migration of markdown posts to database...\n');

  // Initialize database (creates tables if they don't exist)
  getDb();

  let successCount = 0;
  let failureCount = 0;

  postsToMigrate.forEach(post => {
    const result = migratePost(post);
    if (result) {
      successCount++;
    } else {
      failureCount++;
    }
  });

  console.log(`\n--- Migration Complete ---`);
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${failureCount}`);
  console.log(`Total: ${postsToMigrate.length}`);

  // Close database connection
  closeDb();
}

// Run migration if this script is executed directly
if (require.main === module) {
  runMigration();
}

module.exports = { runMigration };
