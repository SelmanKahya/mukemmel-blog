import React, { Component } from 'react';
import Header from "../components/Header"
import Footer from '../components/Footer';
import withAuth from '../components/hoc/withAuth';
import Head from "next/head";
import SlateEditor from '../components/slate-editor/Editor'
import {createBlog} from '../actions';
import { Router } from '../routes';
import {toast} from 'react-toastify' ;

class BlogEditor extends Component {

  constructor(props){
    super(props);
    this.state = {
      isSaving: false,
      lockId: Math.floor(1000 + Math.random() * 9000)
    }
    this.saveBlog = this.saveBlog.bind(this);
  }
  saveBlog(story, heading){
    const {lockId} = this.state;
    const blog = {};
    blog.title = heading.title;
    blog.subtitle = heading.subtitle;
    blog.story = story.toString();

    this.setState({isSaving: true});
    createBlog(blog, lockId).then(createdBlog => {
      this.setState({isSaving: false});
      toast.success('Blog Saved Succesfuly!');
      Router.pushRoute(`/blogs/${createdBlog._id}/edit`);
    }).catch(err => {
      this.setState({isSaving: false});
        const message = err.message ||'Server Error';
        toast.error('Unexpected Error');
        console.error(message);
      })
  }

  render() {
    const {isSaving} = this.state;
    return (
      <div>
        <Header isAuthenticated={this.props.auth.isAuthenticated}/>
          <div className="container">
          <SlateEditor isLoading={isSaving} save={this.saveBlog}/>
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
export default withAuth('siteOwner')(BlogEditor);