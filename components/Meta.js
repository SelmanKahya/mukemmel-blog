import React from "react";
import Head from "next/head";
import '../public/global.css';

const Meta = (props) => (
  <Head>
    <title>{props.title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
)

export default Meta;