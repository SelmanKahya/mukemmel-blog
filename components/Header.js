import React from "react";
import Link from "next/link";

const Home = () => (
  <div className="bg-gray-900 py-24 shadow-xl">
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-5xl font-semibold text-white">Onur Güler</h1>
      <p className="text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia provident nesciunt ad minima maiores culpa quam
        aspernatur nulla obcaecati?
      </p>
      <div className="hero-social-links mt-5">
        <Link href="https://medium.com/@selmankahya">
          <a className="mr-2 px-4 py-1 text-sm text-gray-900 bg-gray-400 font-semibold rounded-full hover:bg-gray-500">Medium</a>
        </Link>
        <Link href="https://www.twitter.com/selmankahyax">
          <a className="mr-2 px-4 py-1 text-sm text-gray-900 bg-gray-400 font-semibold rounded-full hover:bg-gray-500">Twitter</a>
        </Link>
        <Link href="https://www.linkedin.com/in/selmankahya">
          <a className="mr-2 px-4 py-1 text-sm text-gray-900 bg-gray-400 font-semibold rounded-full hover:bg-gray-500">
            LinkedIn
          </a>
        </Link>
        <Link href="https://www.instagram.com/selmankahyax/?hl=en">
          <a className="mr-2 px-4 py-1 text-sm text-gray-900 bg-gray-400 font-semibold rounded-full hover:bg-gray-500">
            Instagram
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
