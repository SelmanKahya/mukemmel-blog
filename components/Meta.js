import Head from "next/head";
import '../public/global.css';

class Meta extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Head>
        <title>{this.props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
  }
}
export default Meta;