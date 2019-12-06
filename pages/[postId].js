import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Page from "../layouts/main";
import SinglePost from "../components/singlePost";

const BlogPost = ({ post }) => (
  <Page minimal={true}>
    <div class="container-xl">
      <SinglePost
        detailsPage={true}
        title={post.title}
        details={post.details}
        date={post.date}
      />
    </div>
  </Page>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
