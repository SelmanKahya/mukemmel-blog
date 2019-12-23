import React from "react";
import Link from "next/link";
import LoginDialog from "./loginDialog";
import RegisterDialog from "./registerDialog";

interface Props {
  minimal?: boolean
}

const socialLinks = () => (
  <div className="hero-social-links">
    <a className="social-link" href="https://medium.com/@selmankahya">
      <span className="icon-facebook-squared"></span>
      Medium
      </a>
    <a className="social-link" href="https://www.twitter.com/selmankahyax">
      <span className="icon-twitter-squared"></span>
      Twitter
      </a>
    <a className="social-link" href="https://www.linkedin.com/in/selmankahya">
      <span className="icon-linkedin-squared"></span>

      LinkedIn
      </a>
    <a className="social-link" href="https://www.instagram.com/selmankahyax/?hl=en">

      <span className="icon-instagram-filled"></span>

      Instagram
      </a>

    <div className="clearfix" />
    <Link href="/[postId]" as="/about">
      <a className="social-link" href="https://www.instagram.com/selmankahyax/?hl=en">
        About me
        </a>
    </Link>
  </div>
)

const Header = ({ minimal }: Props) => {


  if (!minimal) {
    return (
      <div className="hero">
        <h1 className="hero-title">
        <Link href="/">
          <a>Selman Kahya</a>
        </Link>
        </h1>
        {socialLinks()}
        <div className="inline">
          <LoginDialog/>
          <RegisterDialog/>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-minimal">
      <h1 className="hero-title">
        <Link href="/">
          <a>Selman Kahya</a>
        </Link>
      </h1>
      {socialLinks()}
    </div>
  );
};

export default Header;
