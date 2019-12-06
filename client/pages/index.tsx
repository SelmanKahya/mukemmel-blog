import * as React from "react";
import Head from "next/head";
import Navbar from "../Components/Navbar/Navbar";

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Berkay'ın Bloğu</title>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
    </Head>

    <Navbar />
  </div>
);

export default Home;
