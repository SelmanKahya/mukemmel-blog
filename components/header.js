import React from "react";
import Link from "next/link";

const Header = ({ minimal }) => {
  if (!minimal) {
    return (
      <div className="hero">
        <h1 className="hero-title">Selman Kahya</h1>
        <div className="hero-social-links">
          <Link href="https://medium.com/@selmankahya">
            <a className="social-link">Medium</a>
          </Link>
          <Link href="https://www.twitter.com/selmankahyax">
            <a className="social-link">Twitter</a>
          </Link>
          <Link href="https://www.linkedin.com/in/selmankahya">
            <a className="social-link">LinkedIn</a>
          </Link>
          <Link href="https://www.instagram.com/selmankahyax/?hl=en">
            <a className="social-link">Instagram</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-minimal">
      <h1 className="hero-title">
        <Link href="/">Selman Kahya</Link>
      </h1>
      <div className="hero-social-links">
        <Link href="https://medium.com/@selmankahya">
          <a className="social-link">Medium</a>
        </Link>
        <Link href="https://www.twitter.com/selmankahyax">
          <a className="social-link">Twitter</a>
        </Link>
        <Link href="https://www.linkedin.com/in/selmankahya">
          <a className="social-link">LinkedIn</a>
        </Link>
        <Link href="https://www.instagram.com/selmankahyax/?hl=en">
          <a className="social-link">Instagram</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
