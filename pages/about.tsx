import React from "react";
import SinglePost from "../components/singlePost";
import Page from "../layouts/main";
import { useQuery } from "@apollo/react-hooks";
import getPage from '../graphql/queries/getPage'
import Loading from "../components/loading";

const About = () => {
  const { data, loading } = useQuery(getPage('about'))
  if (!loading) {
    const content = data.staticPages.content
    return (
      <Page minimal={true}>
        <div className="sm:flex flex-row justify-center">
          <SinglePost
            title={"Hakkinda"}
            slug={"hakkinda"}
            details={content}
            date={""}
            image={""}
            userName={""}
            userImage={""}
            detailsPage={true}
          />
        </div>
      </Page>
    );
  } else {
    return <Loading/>
  }


}


export default About