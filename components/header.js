import React from "react";
import Link from "next/link";

const Header = ({ minimal }) => {
  if (!minimal) {
    return (
      <div className="hero">
        <h1 className="hero-title">Selman Kahya</h1>
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
      <div className="hero-social-links">
      <a className="social-link" href="https://medium.com/@selmankahya">Medium</a>
            <a className="social-link" href="https://www.twitter.com/selmankahyax">Twitter</a>
            <a className="social-link" href="https://www.linkedin.com/in/selmankahya">LinkedIn</a>
            <a className="social-link" href="https://www.instagram.com/selmankahyax/?hl=en">Instagram</a>

      </div>
    </div>
  );
};

export default Header;
