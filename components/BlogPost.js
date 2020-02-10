import React, { Component } from 'react'
import Card from '../components/Card'
import {Link} from '../routes';
//import PortButtonDropdown from './ButtonDropdown';

class BlogPost extends Component {
  constructor(props){
    super();
  }

  countWords = (str) => {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return Math.ceil(str.split(' ').length / 200);
  }


  render() {
    const {blogs} = this.props;
    //const {published, drafts} = this.seperateBlogs(blogs);

    return (
      <div className="blogPost" style={{width: this.props.width, marginTop: this.props.marginTop}}>
      {blogs.map((post, index) => {
      return (
        <Card date={post.createdAt} route={`/blogs/${post.slug}`} key={index} marginTop="0px" title={post.title} body={post.story.substring(0, 180)} minute = {this.countWords(post.story)}/>
        )
      })}
      <style jsx>{`
        .blogPost{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
      `}</style>
  </div>
    )
  }
}

export default BlogPost
