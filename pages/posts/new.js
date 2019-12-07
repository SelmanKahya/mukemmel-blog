import React from "react";
import Editor from "../../components/Editor";
import Layout from "../../components/Layout";

const NewBlogPost = () => {
  return (
    <Layout>
      <div className="mx-auto py-24 max-w-2xl container">
        <Editor />
      </div>
    </Layout>
  );
};

export default NewBlogPost;
