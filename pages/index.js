import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import Meta from '../components/Meta';

import NavigationBar from '../components/NavigationBar';
import Pagination from '../components/Pagination';

class Home extends React.Component {
  static async getInitialProps({ query: { page=0 }}) {
    // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
    const res = await fetch("http://localhost:3000/api/posts?page="+page);
    const json = await res.json();
    return { posts: json.posts, pageNumber: page, isNextPageExists: json.isNextPageExists };
  }

  render() {
    return (
      <div className="container">
        <Meta title="Home" />
        <NavigationBar />

        {
        this.props.posts.map(post => (
          <div className="blog">
            <h2 className="blog-title">
              <Link href={post.slug}>
                <a className="blog-title-link">{post.title}</a>
              </Link>
            </h2>
            <div className="blog-text">
              <ReactMarkdown source={post.details} />
            </div>
            <div className="blog-date">{post.date}</div>
          </div>
        ))
        }

        <Pagination pageNumber={parseInt(this.props.pageNumber)} isNextPageExists={this.props.isNextPageExists} />
      </div>
    )
  }
}


export default Home;
