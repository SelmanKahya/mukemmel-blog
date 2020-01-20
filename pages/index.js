import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { FaLinkedinIn, FaMediumM, FaGithub, FaSearch } from 'react-icons/fa'
import { CardDeck, Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
//import {Card} from 'react-bootstrap'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import SocialMediaIcons from "../components/SocialMediaIcons";
import BlogPost from "../components/BlogPost";
import SideBar from "../components/SideBar";
//replace(/(([^\s]+\s\s*){20})(.*)/, "$1…")
const Home = ({ posts }) => (

  <div>
    <div className="title">
      <Navbar className="fixed-top justify-content-center" bg="dark" variant="dark">
        <Navbar.Brand href="/">Ahmet Dadak</Navbar.Brand>
      </Navbar>

      <Nav className="bg-dark justify-content-center" style={{ paddingTop: "60px", paddingBottom: "5px" }} >
        <Nav.Link className="text-light" href="/">Home</Nav.Link>
        <Nav.Link className="text-light" href="/posts">Posts</Nav.Link>
        <Nav.Link className="text-light" href="about">About</Nav.Link>
        <Nav.Link className="text-light" href="#">Contact</Nav.Link>
        <SearchBar />


      </Nav>
      <SocialMediaIcons />

    </div>
    <section className="container">
      <BlogPost posts={posts}/>
      <SideBar />
    </section>
    <Footer />

    <div className="container-div">
      <Head>
        <title>Ahmet Dadak</title>
        <meta name = "viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous" />
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous" />
      </Head>

      {/* {posts.map(post => (
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
      ))} */}
    </div>


    <style jsx>{`
    .container{
        display: flex;
        justify-content: space-between;
        margin:;
      }


      .container-div{
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }
      .post-card{
        justify-content: center;
        max-width: 1080px;
        width: 100%;
        margin: 0 auto;
      }
      .header{
        text-align:center;
        height: 300px;
        max-width: 100%;
        width: 100%;
        background: rgb(41,43,44);
      }
      .header-text{
        padding-top: 80px;
        color: #f7f7f7;
        font-family: monotype corsiva;
        font-size: 96px;
      }
      .card-grid{
        max-width: 700px;
        width: 100%;
        justify-content: center;
        display:flex;
        flex-direction:row;
      }
      .card-grid > div
      {
        margin: 0 30px;  /* and that, will result in a 10px gap */
      }
      .hero {
        text-align: center;
        margin: 96px 0;
      }

      .hero-social-links{
        margin:20px;
        color: green;
      }

      .hero-title {
        text-align: center;
        vertical-align: middle;
        color: white;
        font-family: corbel;
        font-size: 96px;
      }

      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
