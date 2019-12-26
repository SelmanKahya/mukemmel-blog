import React from "react";
import SinglePost from "../../../components/singlePost";
import Page from "../../../layouts/main";
import { NextPageContext } from "next";
import { loadDB } from "../../../utils/firebase";
import { AuthStoreProps } from "../../../stores/AuthStore/AuthStore";
import { PostProps } from "../../../utils/props";

export interface Props {
  authStore: AuthStoreProps
  posts: Array<PostProps>
}

class Test extends React.Component<Props, {}> {
  static getInitialProps = async (ctx: NextPageContext) => {
    const { categoryId } = ctx.query
    const db = await loadDB()
    const requestPosts = await db.firestore().collection('posts').where('categoryId', '==', categoryId).get()
    const posts = requestPosts.docs.map(post => post.data())

    return {
      posts: posts,
    }
  }

  render() {
    const { posts } = this.props;
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
  }
}

export default Test;
