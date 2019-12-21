import { getPosts } from "../../src/blog-posts";

const postCountInPages = 4;

export default async ({ query: { page }}, res) => {
  const allPosts = getPosts();
  page = parseInt(page);
  if(!page) page = 0; // If page query doesn't exists, than page number is zero

  // Get {postCountInPages} posts from requested page number
  let posts = allPosts.slice(page*postCountInPages, (page*postCountInPages)+postCountInPages); 
  
  if(posts.length == 0) {
    // If no posts exists in requested page
    // then return first page. 
    posts = allPosts.slice(0, postCountInPages);
  }

  // Check if next page has any posts.
  let isNextPageExists = (allPosts.slice((page+1)*postCountInPages, ((page+1)*postCountInPages)+postCountInPages).length != 0);

  res.json({ posts, isNextPageExists });
};