import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import UserDetails from "./userDetails";

const SinglePost = props => {
  const {
    title,
    slug,
    details,
    date,
    detailsPage,
    userName,
    userImage,
    image
  } = props;
  if (!detailsPage) {
    return (
      <Link href={slug}>
        <div className="sm:w-1/4 m-5 bg-gray-100 p-5 rounded-lg cursor-pointer">
          <div id="blogImage">
            <img src={image} />
          </div>
          <h2 className="font-bold text-2xl py-5">
            <Link href={slug}>
              <a className="blog-title-link">{title}</a>
            </Link>
          </h2>
          <div className="blog-text leading-relaxed">
            <ReactMarkdown source={details} />
          </div>

          <UserDetails name={userName} image={userImage} />

          <div className="blog-date">{date}</div>
        </div>
      </Link>
    );
  } else {
    return (
      <div className="w-full m-5 p-5 rounded-lg">
        <div id="blogImage">
          <img src={image} className="w-5" />
        </div>
        <h2 className="font-bold text-5xl py-5 text-center">
          <Link href={slug}>
            <a className="blog-title-link">{title}</a>
          </Link>
        </h2>
        <div className="blog-text leading-relaxed">
          <ReactMarkdown source={details} />
        </div>
        <hr />
        <UserDetails name={userName} image={userImage} className="mt-5" />

        <div className="blog-date">{date}</div>
      </div>
    );
  }
};

export default SinglePost;
