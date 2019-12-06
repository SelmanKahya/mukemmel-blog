import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

const BlogPostCard = ({ post }) => (
  <div key={post.id} className={`mb-4 ${post.cover && "sm:flex"} md:rounded shadow-md bg-gray-300 overflow-hidden`}>
    {post.cover && (
      <Link href={post.slug}>
        <img className="sm:w-40 md:h-auto object-cover cursor-pointer" src={post.cover} />
      </Link>
    )}
    <div className="px-4 py-2">
      <h2 className="font-semibold text-lg hover:text-gray-700">
        <Link href={post.slug}>
          <a>{post.title}</a>
        </Link>
      </h2>
      <div>
        <ReactMarkdown source={post.details} />
      </div>
      <div className="text-right mt-2">
        <span className=" px-4 py-1 font-semibold rounded-full bg-gray-600 text-white">{post.date}</span>
      </div>
    </div>
  </div>
);

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default BlogPostCard;
