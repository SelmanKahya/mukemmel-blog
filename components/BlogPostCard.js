import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

const BlogPostCard = ({ post }) => (
  <div key={post.id} className="mb-4 px-4 py-2 border rounded shadow">
    <h2 className="blog-title">
      <Link href={post.slug}>
        <a className="blog-title-link">{post.title}</a>
      </Link>
    </h2>
    <div className="blog-text">
      <ReactMarkdown source={post.details} />
    </div>
    <div className="text-right text-gray-600">{post.date}</div>
  </div>
);

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default BlogPostCard;
