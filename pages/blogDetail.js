import React, { Component } from 'react';
import Header from "../components/Header"
import Footer from '../components/Footer';
import Head from "next/head";
import {getBlogBySlug} from '../actions';
class About extends Component {
  static async getInitialProps({query}) {
    let blog = {};
    const slug = query.slug;
    try {
      blog = await getBlogBySlug(slug);
    } catch(err){
      console.error(err);
    }
    return {blog}
  }
  render() {
    const {blog} = this.props;

    return (
      <div>
        <Header isAuthenticated={this.props.auth.isAuthenticated}/>
          <div dangerouslySetInnerHTML={{__html: blog.story}}></div>
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
export default About;