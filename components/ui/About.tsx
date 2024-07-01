"use client";
import React from "react";
import Photo from "./Photo";

const About = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1  md:grid-cols-1 mt-60 mb-20 ">
      <div className="text-center xl:text-left order-2 xl:order-none ">
        <div className="text-center ">
          <p>
            <span className="text-purple text-5xl">
              Hey! I&apos;m Rony Miah,{" "}
            </span>
            <br />
            <span className="text-gray-300 text-2xl">
              A passionate and dedicated Junior Full Stack Developer
            </span>
            with a keen interest in building robust and scalable web apps. My
            strong foundation in frontend and backend technologies allows me to
            create seamless user experiences and efficient server-side logic.
            Node.js, Next.js, and React make up my main tech stack.
          </p>
        </div>
      </div>
      <div className=" order-1 xl:order-none mb-8 xl:mb-0 ">
        <Photo />
      </div>
      {/* </div> */}
    </div>
  );
};

export default About;
