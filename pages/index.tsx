import React from "react";
import SinglePost from "../components/singlePost";
import Page from "../layouts/main";
import { useQuery } from '@apollo/react-hooks'
import GET_ALL_POSTS_QUERY from '../graphql/queries/getPosts'


const Home = () => {


  const { data, loading } = useQuery(GET_ALL_POSTS_QUERY)

  if (!loading) {

    return (
      <Page>
        <div className="sm:flex flex-row justify-center">
          {data.posts.map(post => (

            <SinglePost
              title={post.title}
              slug={post.slug}
              details={post.content}
              date={post.created_at}
              image={post.image}
              userName={post.username}
              userImage={post.userImage}
              key={post.id}
            />
          ))}
        </div>
      </Page>
    )
  } else {

    return (
      <h1>loading</h1>
    )
  }
};

export default Home;
