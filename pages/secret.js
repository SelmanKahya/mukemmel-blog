import React, { Component } from 'react';
import Header from "../components/Header"
import Link from "next/link"
import Footer from '../components/Footer';
import withAuth from '../components/hoc/withAuth';

import { getSecretData } from '../actions';
class Secret extends Component {

  static async getInitialProps({req}) {
    const anotherSecretData = await getSecretData(req);
    console.log(anotherSecretData);
    return { anotherSecretData };
  }
  state = {
    secretData: []
  }

  async componentDidMount() {
    const secretData = await getSecretData();
    this.setState({
      secretData
    });
  }

  displaySecretData() {
    const { secretData } = this.state;

    if (secretData && secretData.length > 0) {
      return secretData.map((data, index) => {
        return (
          <div key={index}>
            <p>{data.title}</p>
            <p>{data.description}</p>
          </div>
        )
      })
    }
    return null;
  }
  render() {
    const { superSecretValue } = this.props;
    return (
      <div>
        <Header isAuthenticated={this.props.auth.isAuthenticated} />
        <p>I am secret</p>
        <p>{superSecretValue}</p>
        {this.displaySecretData()}
        <Link href="/">
          <a>Go home</a>
        </Link>
        <Footer />
      </div>
    )
  }
}
export default withAuth()(Secret);