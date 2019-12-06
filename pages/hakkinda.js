import React from "react";
import SinglePost from "../components/singlePost";
import Page from "../layouts/main";
import ReactMarkdown from "react-markdown";

const content = require('../src/static/about.md').default

const About = (props) => (
  <Page>
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


export default About