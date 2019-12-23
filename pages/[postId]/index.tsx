import React from "react";
import Page from "../../layouts/main";
import SinglePost from "../../components/singlePost";
import { useQuery } from "@apollo/react-hooks";
import GET_SINGLE_POST_QUERY from '../../graphql/queries/getSinglePost'
import Loading from "../../components/loading";
import { BlogPostProps } from "./postId.props";
import { loadDB } from "../../utils/firebase";
import { DocumentSnapshot } from "@firebase/firestore-types";
import { PostProps, PageProps } from "../../utils/props";
import Error from 'next/error'


const renderPost = (post: PostProps): React.ReactNode => {
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
}

const renderPage = (page: PageProps): React.ReactNode => {
  return (
    <Page minimal={true} className="">
      <div className="container mx-auto w-8/12">
        <SinglePost
          title={"Hakkinda"}
          slug={"hakkinda"}
          details={page.content}
          date={""}
          image={""}
          userName={""}
          userImage={""}
          detailsPage={true}
        />
      </div>
    </Page>
  );
}

const BlogPost = (props: BlogPostProps): React.ReactNode => {
  const { post, page } = props;

  if (post !== undefined) {
    return renderPost(post)
  }

  if (page !== undefined) {
    return renderPage(page)
  }

  return <Error statusCode={404} />



};

BlogPost.getInitialProps = async ({ query: { postId } }) => {
  const db = await loadDB()
  const posts = await db.firestore().collection('posts').where('slug', '==', postId).get()
  let page = null;
  if (posts.docs.length < 1) {
    page = await db.firestore().collection('staticPages').doc(postId).get()
  }

  return {
    post: posts.docs.map(post => post.data())[0],
    page: page ? page.data() : undefined
  }
};


export default BlogPost;
