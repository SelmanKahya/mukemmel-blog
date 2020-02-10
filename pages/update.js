import React, { Component } from 'react';
import Header from "../components/Header"
import Footer from '../components/Footer';
import withAuth from '../components/hoc/withAuth';
import Head from "next/head";
import SlateEditor from '../components/slate-editor/Editor'
import {getBlogById, updateBlog} from '../actions';
import {toast} from 'react-toastify' ;
class BlogEditorUpdate extends Component {


    static async getInitialProps( {query} ){
        const blogId = query.id;
        let blog = {};
        try{
            blog = await getBlogById(blogId);
        }catch(err){
            console.error(err);
        }
        return {blog};
    }

  constructor(props){
    super(props);
    this.state = {
      isSaving: false
    }
    this.updateBlog = this.updateBlog.bind(this);
  }

  updateBlog(story, heading){
    const {blog} = this.props;
    const updatedBlog = {};
    updatedBlog.title = heading.title;
    updatedBlog.subtitle = heading.subtitle;
    updatedBlog.story = story.toString();

    this.setState({isSaving: true});
    updateBlog(blog, blog._id).then(updatedBlog => {
      toast.success('Blog Updated Succesfuly!');
      this.setState({isSaving: false});
    }).catch(err => {
      this.setState({isSaving: false});
        const message = err.message ||'Server Error';
        toast.error('Unexpected Error');
        console.error(message);
      })
  }

  render() {
    const { blog } = this.props;
    const {isSaving} = this.state;
    return (
      <div>
        <Header isAuthenticated={this.props.auth.isAuthenticated}/>
          <div className="container">
          <SlateEditor initialValue = {blog.story} isLoading={isSaving} save={this.updateBlog}/>
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
export default withAuth('siteOwner')(BlogEditorUpdate);