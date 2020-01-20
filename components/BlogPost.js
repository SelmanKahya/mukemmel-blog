import React from 'react'
import Card from '../components/Card'

const BlogPost = (props) => {
    return (
        <div className="blogPost">
            {props.posts.map((post) => {
            return (
              <Card title={post.title} body={post.details.substring(0, 180) + '...'}/>
            )
            })}
            <style jsx>{`
              .blogPost{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                width:70%;
                background: #fff;
              }
            `}</style>
        </div>
    )
}

export default BlogPost


