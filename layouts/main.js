import Header from "../components/header";
import Head from "next/head";
import "../public/app.scss";

const Page = ({ minimal, children }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"
        integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI="
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header minimal={minimal} />
    {children}
  </div>
);
export default Page;
