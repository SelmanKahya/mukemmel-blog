import React, { Component } from 'react'
import Card from '../components/Card'

class BlogPost extends Component {
  constructor(props){
    super(props);


  }
  countWords = (str) => {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return Math.ceil(str.split(' ').length / 200);
  }
  render() {

    return (
      <div className="blogPost" style={{width: this.props.width, marginTop: this.props.marginTop}}>
      {this.props.posts.map((post) => {
      return (
        <Card marginTop="60px" title={post.title} body={post.details.substring(0, 180) + '...'} minute = {this.countWords(post.details)}/>
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
