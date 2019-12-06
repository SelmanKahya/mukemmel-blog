import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const SinglePost = props => {
  const { title, slug, details, date, detailsPage } = props;

  if (!detailsPage) {
    return (
      <div className="blog">
        <h2 className="blog-title">
          <Link href={slug}>
            <a className="blog-title-link">{title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={details} />
        </div>
        <div className="blog-date">{date}</div>
      </div>
    );
  } else {
    return (
      <div className="blog-single">
        <h2 className="blog-title">
          <Link href={slug}>
            <a className="blog-title-link">{title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={details} />
        </div>
        <div className="blog-date">{date}</div>
      </div>
    );
  }
};

export default SinglePost;
