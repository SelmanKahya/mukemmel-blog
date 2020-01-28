import React, { Component } from 'react';
import Header from "../components/Header"
import Link from "next/link"
import Footer from '../components/Footer';
import withAuth from '../components/hoc/withAuth';
class Secret extends Component {

    static getInitialProps(){
        const superSecretValue = 'Super Secret Value';

        return { superSecretValue };
    }
    render() {
        const {superSecretValue} = this.props;
    return (
        <div>
        <Header isAuthenticated={this.props.auth.isAuthenticated}/>
          <p>I am secret</p>
          <p>{superSecretValue}</p>
          <Link href="/">
            <a>Go home</a>
          </Link>
          <Footer/>
      </div>
    )
  }
}
export default withAuth(Secret);