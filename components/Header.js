import React from "react";
import Link from "next/link";

const Home = () => (
  <div className="bg-gray-900 py-24 shadow-xl">
    <div className="text-center max-w-2xl mx-auto">
      <div className="sm:flex items-center justify-center text-center mb-4">
        <img
          className="mx-auto sm:mx-0 sm:mr-4 w-32 h-32 rounded-full border-4 border-green-500"
          src="https://avatars1.githubusercontent.com/u/44098417?s=460&v=4"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-semibold text-green-500">Onur Güler</h1>
          <div className="uppercase font-semibold text-white tracking-widest text-sm">Mukemmel Blog</div>
        </div>
      </div>
      <p className="text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia provident nesciunt ad minima maiores culpa quam
        aspernatur nulla obcaecati?
      </p>
      <div className="mt-5 flex flex-wrap justify-center items-center">
        <div className="p-2">
          <Link href="https://medium.com/@selmankahya">
            <a className="px-4 py-1 text-sm text-gray-900 bg-green-500 font-semibold rounded-full hover:bg-green-600">Medium</a>
          </Link>
        </div>
        <div className="p-2">
          <Link href="https://www.twitter.com/selmankahyax">
            <a className="px-4 py-1 text-sm text-gray-900 bg-green-500 font-semibold rounded-full hover:bg-green-600">Twitter</a>
          </Link>
        </div>
        <div className="p-2">
          <Link href="https://www.linkedin.com/in/selmankahya">
            <a className="px-4 py-1 text-sm text-gray-900 bg-green-500 font-semibold rounded-full hover:bg-green-600">LinkedIn</a>
          </Link>
        </div>
        <div className="p-2">
          <Link href="https://www.instagram.com/selmankahyax/?hl=en">
            <a className="px-4 py-1 text-sm text-gray-900 bg-green-500 font-semibold rounded-full hover:bg-green-600">
              Instagram
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
