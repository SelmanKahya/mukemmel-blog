import React from "react";
import SinglePost from "../components/singlePost";
import Page from "../layouts/main";
import { useQuery } from '@apollo/react-hooks'
import GET_ALL_POSTS_QUERY from '../graphql/queries/getPosts'
import Loading from "../components/loading";
import { inject, observer } from 'mobx-react';
import { AuthStoreProps } from "../stores/AuthStore";
import { PostProps } from "../utils/props";
import { verifyAuthenticated } from "../utils/helpers";
import { NextPageContext } from "next";
import { ApolloAppContext } from "next-with-apollo";


interface Props {
  authStore: AuthStoreProps
  posts: Array<PostProps>
  isLoading: boolean
  verifiedToken: boolean
}

@inject('authStore')
class Test extends React.Component<Props, {}> {

  state = {
    posts: [],
    isLoading: true,
    verifiedToken: false
  }

  static getInitialProps = async (ctx: NextPageContext & ApolloAppContext) => {
    const { apolloClient } = ctx
    const { data: {posts}, loading} = await apolloClient.query({
      query: GET_ALL_POSTS_QUERY
    })
    let verifiedToken;
    
    verifiedToken = await verifyAuthenticated(ctx)

    return {
      posts: posts,
      isLoading: loading,
      verifiedToken: verifiedToken
    }
  }

  componentDidMount() {
    if(!this.props.verifiedToken) {
      this.props.authStore.logout()
      return 
    } else {
      this.props.authStore.setLoggedIn(true)
    }
  }
  
  render() {
    const { posts, isLoading } = this.props;
    if (!isLoading) {

      return (
        <Page>
          <div className="sm:flex flex-row justify-center flex-wrap">
            {posts.map(post => (
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
  
      return <Loading />
    }
  }
}

export default Test;
