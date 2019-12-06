import React from "react";
import fetch from "isomorphic-unfetch";
import Page from "../layouts/main";
import SinglePost from "../components/singlePost";
import Error from "next/error";
import { apiUrl } from "../config";

const BlogPost = ({ post, statusCode }) => {
  if (statusCode === 404) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Page minimal={true}>
      <div class="container mx-auto w-8/12">
        <SinglePost
          detailsPage={true}
          title={post.title}
          details={post.details}
          userName={post.user.name}
          userImage={post.user.profile_picture}
          date={post.date}
        />
      </div>
    </Page>
  );
};

BlogPost.getInitialProps = async ({ res, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const response = await fetch(
    `${apiUrl}/api/post/${query.postId}`
  );
  const json = await response.json();
  let data = {
    post: json.post
  };

  if (Object.keys(json).length < 1) {
    res.statusCode = 404;
    data["statusCode"] = 404;
  }

  return data;
};

export default BlogPost;
