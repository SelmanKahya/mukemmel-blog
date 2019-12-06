import React from "react";
import fetch from "isomorphic-unfetch";
import SinglePost from "../components/singlePost";
import Page from "../layouts/main";

const Home = ({ posts }) => (
  <Page>
    <div className="flex flex-row justify-center">
      {posts.map(post => (
        <SinglePost
          title={post.title}
          slug={post.slug}
          details={post.details.substring(0, 250)}
          date={post.date}
          image={post.image}
          userName={post.user.name}
          userImage={post.user.profile_picture}
          key={post.id}
        />
      ))}
    </div>
  </Page>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
