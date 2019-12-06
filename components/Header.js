import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <div className="px-2 py-24 bg-gray-900 shadow-xl">
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-4 sm:flex items-center justify-center text-center">
        <img
          className="mx-auto sm:mx-0 sm:mr-4 w-32 h-32 border-4 rounded-full border-green-500"
          src="https://avatars1.githubusercontent.com/u/44098417?s=460&v=4"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-semibold text-green-500">Onur Güler</h1>
          <div className="text-sm font-semibold text-white uppercase tracking-widest">Mukemmel Blog</div>
        </div>
      </div>
      <p className="text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia provident nesciunt ad minima maiores culpa quam
        aspernatur nulla obcaecati?
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center">
        <div className="p-2">
          <Link href="https://medium.com/@selmankahya">
            <a className="px-4 py-1 text-sm font-semibold bg-green-500 rounded-full hover:bg-green-600">
              <span className="mr-1 text-lg align-middle">
                <FontAwesomeIcon icon={faMedium} />
              </span>
              Medium
            </a>
          </Link>
        </div>
        <div className="p-2">
          <Link href="https://www.twitter.com/selmankahyax">
            <a className="px-4 py-1 text-sm font-semibold bg-green-500 rounded-full hover:bg-green-600">
              <span className="mr-1 text-lg align-middle">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              Twitter
            </a>
          </Link>
        </div>
        <div className="p-2">
          <Link href="https://www.linkedin.com/in/selmankahya">
            <a className="px-4 py-1 text-sm font-semibold bg-green-500 rounded-full hover:bg-green-600">
              <span className="mr-1 text-lg align-middle">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              LinkedIn
            </a>
          </Link>
        </div>
        <div className="p-2">
          <Link href="https://www.instagram.com/selmankahyax/?hl=en">
            <a className="px-4 py-1 text-sm font-semibold bg-green-500 rounded-full hover:bg-green-600">
              <span className="mr-1 text-lg align-middle">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              Instagram
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
