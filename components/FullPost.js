import React from "react";
import ReactMarkdown from "react-markdown";

import './FullPost.css';

const FullPost = ({ post }) => (
  <React.Fragment>
    <h2 className="post-title">{post.title}</h2>
    <div className="post-text">
      <ReactMarkdown source={post.details} />
    </div>
    <div className="post-date">{post.date}</div>
  </React.Fragment>
);

export default FullPost;