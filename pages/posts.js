import React, { Component } from 'react';
import axios from 'axios';
class Posts extends Component{

    static async getInitialProps(){
        let posts = [];
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
        }
        catch(err){
            console.error(err);
        }

        return{posts: posts.splice(0, 10)};
    }
    render (){
        const {posts} = this.props;
        return (
            <div>
                <h1> I am posts page</h1>
                <ul>
                  {posts.map((post) => {
                      return(
                        <li>{post.id}</li>
                      )
                  })}
                </ul>
            </div>
        )
    }
}

export default Posts;