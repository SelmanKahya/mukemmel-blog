import React from "react";
import Page from "../layouts/main";
import SinglePost from "../components/singlePost";
import { PostProps } from "../utils/props";
import { useQuery } from "@apollo/react-hooks";
import GET_SINGLE_POST_QUERY from '../graphql/queries/getSinglePost'
import Loading from "../components/loading";



interface BlogPostProps {
  post: PostProps,
  statusCode: number
}

const BlogPost = (props: BlogPostProps) => {
  const { post: { slug } } = props
  const { data, loading } = useQuery(GET_SINGLE_POST_QUERY(slug))
  if (!loading) {
    const post = data.posts[0]
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
  } else {
    return (
      <Loading/>
    )
  }

};

BlogPost.getInitialProps = async ({query}) => {
  return {
    post: {
      slug:  query.postId
    }
  }
};


export default BlogPost;
