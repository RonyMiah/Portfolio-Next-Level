"use client";
import React from "react";
import Photo from "./Photo";
import MagicButton from "./MagicButton";
import { HiRocketLaunch } from "react-icons/hi2";
import ContactButton from "./ContactButton";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const About = () => {
  return (
    <div className="grid lg:grid-cols-2  md:grid-cols-1 mt-10 ">
      <div className="text-center xl:text-left order-2 xl:order-none mt-10 ">
        <div >
          <p>
            <span className="text-purple text-5xl pt-2"> Hey, </span>
            <span className="text-white text-5xl pb-2">
              {" "}
              I&apos;m Rony Miah,{" "}
            </span>
            <br />
            <span className="text-gray-300 text-2xl py-2  text-start">
              A Junior Full Stack Developer works on both front-end and back-end
              Development .
            </span>

            <p>
              My expertise includes building dynamic and responsive web
              applications, integrating APIs, and managing databases. My passion
              is building efficient, scalable, and user-friendly solutions. The
              main tech stack I use is Node.js, Next.js, and React.
            </p>
            <div className="flex mt-6 justify-stretch items-center gap-6">
              <Link className="font-bold text-4xl" href="">
                <FaGithub />
              </Link>
              <Link className="font-bold text-4xl" href="">
                <FaLinkedin />
              </Link>
              <Link className="font-bold text-4xl" href="">
                <FaYoutube />
              </Link>
              <a href="#contact">
                <MagicButton
                  title="Let's talk"
                  icon={<HiRocketLaunch />}
                  position="right"
                />
              </a>
            </div>
          </p>
        </div>
      </div>
      <div className=" order-1 xl:order-none  xl:mb-0 ">
        <Photo />
      </div>
      {/* </div> */}
    </div>
  );
};

export default About;
