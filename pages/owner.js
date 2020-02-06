import React, { Component } from 'react';
import Header from "../components/Header"
import Link from "next/link"
import Footer from '../components/Footer';
import withAuth from '../components/hoc/withAuth';

class Owner extends Component {
  render() {
    return (
      <div>
        <Header isAuthenticated={this.props.auth.isAuthenticated}/>
          <p>Hello, Ahmet</p>
          <Link href="/">
            <a>Go home</a>
          </Link>
          <Footer/>
      </div>
    )
  }
}
export default withAuth('siteOwner')(Owner);