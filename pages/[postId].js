import React from "react";
import fetch from "isomorphic-unfetch";

import Meta from '../components/Meta';
import NavigationBar from '../components/NavigationBar';
import FullPost from '../components/FullPost';

const BlogPost = ({ post }) => (
  <div className="container">
    <Meta title={post.title} />
    <NavigationBar />

    <FullPost post={post} />
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
