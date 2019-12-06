import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Layout from "../components/Layout";
import BlogPostCard from "../components/BlogPostCard";
import "../styles/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Home = ({ posts }) => (
  <Layout>
    <Head>
      <title>Mukemmel Blog | Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="mx-auto py-24 max-w-2xl container">
      {posts.map(post => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  </Layout>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
