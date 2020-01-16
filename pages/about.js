import React from "react";
import Link from 'next/link';

const About = () => {
    return (
        <div>
          <p>Hello, My name is Ahmet. I am a junior computer engineering student. Here, you can find my posts about my experiences.</p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </div>
      );
}

export default About;