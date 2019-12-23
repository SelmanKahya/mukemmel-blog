import React from "react";
import Page from "../../layouts/main";
import SinglePost from "../../components/singlePost";
import { useQuery } from "@apollo/react-hooks";
import GET_SINGLE_POST_QUERY from '../../graphql/queries/getSinglePost'
import Loading from "../../components/loading";
import { BlogPostProps } from "./postId.props";
import { loadDB } from "../../utils/firebase";
import { DocumentSnapshot } from "@firebase/firestore-types";





const BlogPost = (props: BlogPostProps) => {
  const { post } = props;
  return (
    <Page minimal={true} className="">
      <div className="container mx-auto w-8/12">
        <SinglePost
          detailsPage={true}
          slug=""
          title={post.title}
          details={post.content}
          userName={post.username}
          userImage={post.userImage}
          date={post.created_at}
        />
      </div>
    </Page>
  );

};

BlogPost.getInitialProps = async ({ query: { postId } }) => {
  const db = await loadDB()
  const posts = await db.firestore().collection('posts').where('slug', '==', postId).get()
  const post = posts.docs.map(post => post.data())

  return {
    post: post[0]
  }
};


export default BlogPost;
