import * as React from "react";
import Head from "next/head";
import Navbar from "../Components/Navbar/Navbar";
import Home from "./Home/Home";
import "../utils/css/index.css";

const App: React.FC = () => (
  <div className="wrapper">
    <Head>
      <title>Berkay'ın Bloğu</title>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Navbar />
    <Home />
  </div>
);

export default App;
