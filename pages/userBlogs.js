import React, { Component } from 'react';
import Header from "../components/Header"
//import Link from "next/link"
import Footer from '../components/Footer';
import Head from "next/head";
import withAuth from '../components/hoc/withAuth';
import {getUserBlogs} from '../actions';
import {Link} from '../routes';
class UserBlogs extends Component {

  static async getInitialProps({req}) {
    let blogs = [];
    try {
      blogs = await getUserBlogs(req);
    } catch(err){
        console.error(err);
    }
    return {blogs}
  }

  seperateBlogs(blogs) {
    const published = [];
    const drafts = [];
    blogs.forEach((blog) => {
      blog.status === 'draft' ? drafts.push(blog) : published.push(blog);
    });

    return {published, drafts};
  }

  renderBlogs(blogs){
    return (
      <ul className = "user-blogs-list" >)>
        {
          blogs.map((blog, index) => (
            <li key={index}>
                <Link route={`/blogs/${blog._id}/edit`}>
                  <a> {blog.title}</a>
                </Link>
            </li>
          ))
        }
      </ul>
    )
  }

  render() {
    const {blogs} = this.props;
    const {published, drafts} = this.seperateBlogs(blogs);
    return (
      <div>
        <Header isAuthenticated={this.props.auth.isAuthenticated}/>
          <div>
            <h2> Published Blogs</h2>
            {this.renderBlogs(published)}
          </div>
          <div>
            <h2> Draft Blogs</h2>
            {this.renderBlogs(drafts)}

          </div>
          <Footer/>
          <div>
        <Head>
          <title>Ahmet Dadak</title>
          <meta name = "viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet"/>
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css?family=Qwigley&display=swap" rel="stylesheet"/>
        </Head>
      </div>
      </div>
    )
  }
}
export default withAuth('siteOwner')(UserBlogs);