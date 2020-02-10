import Head from "next/head";
import Footer from '../components/Footer'
import BlogPost from "../components/BlogPost";
import SideBar from "../components/SideBar";
import Header from "../components/Header"
import { getBlogs} from '../actions';
import React, { Component } from 'react';
class Index extends Component {
  constructor(){
    super();
  }

  static async getInitialProps({req}) {
    let blogs = [];
    try {
      blogs = await getBlogs(req);
    } catch(err){
        console.error(err);
    }
    return {blogs}
  }

  render() {
    return (
      <div>
      <Header user={this.props.auth.user} isAuthenticated={this.props.auth.isAuthenticated}/>
      <div className="container">
        <BlogPost marginTop= "60px" width = "66%" className="blogPostmain" blogs={this.props.blogs}/>
        <SideBar marginTop= "60px" width = "29%" className = "sidebarmain"/>
      </div>
      <Footer />

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


      <style jsx>{`
        .container{
          display: flex;

        }

        .blogPostmain{
          width: 64%;
        }
        .sidebarmain{

        }
        .post-card{
          justify-content: center;
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
        .clickable{
          cursor:pointer;
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
    )
  }
}

// Index.getInitialProps = async ({ req, ctx}) => {
//   TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
//   const res = await fetch("http://localhost:3000/api/posts");
//   const json = await res.json();
//   return { posts: json.posts};
// };

export default Index;