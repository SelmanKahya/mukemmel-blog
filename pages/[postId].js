import React from "react";
import fetch from "isomorphic-unfetch";
import Page from "../layouts/main";
import SinglePost from "../components/singlePost";

const BlogPost = ({ post }) => (
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

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
