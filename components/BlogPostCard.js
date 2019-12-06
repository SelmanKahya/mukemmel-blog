import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

const BlogPostCard = ({ post }) => (
  <div key={post.id} className={`mb-4 ${post.cover && "sm:flex"} md:rounded-lg shadow-md bg-gray-400 overflow-hidden`}>
    {post.cover && (
      <Link href={post.slug}>
        <img className="sm:w-40 md:h-auto object-cover cursor-pointer" src={post.cover} />
      </Link>
    )}
    <div className="px-4 py-2">
      <h2 className="blog-title text-gray-900 font-semibold text-lg">
        <Link href={post.slug}>
          <a className="blog-title-link hover:text-gray-700">{post.title}</a>
        </Link>
      </h2>
      <div className="blog-text">
        <ReactMarkdown source={post.details} />
      </div>
      <div className="text-right mt-2">
        <span className="bg-gray-600 px-4 py-1 rounded-full text-white font-semibold">{post.date}</span>
      </div>
    </div>
  </div>
);

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default BlogPostCard;
