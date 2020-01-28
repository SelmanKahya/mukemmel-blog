import React, { Component } from 'react';
import Header from "../components/Header"
import Link from "next/link"
import Footer from '../components/Footer';
class About extends Component {
  render() {
    return (
      <div>
        <Header isAuthenticated={this.props.auth.isAuthenticated}/>
          <p>Hello, My name is Ahmet. I am a junior computer engineering student. Here, you can find my posts about my experiences.</p>
          <Link href="/">
            <a>Go home</a>
          </Link>
          <Footer/>
      </div>
    )
  }
}
export default About;