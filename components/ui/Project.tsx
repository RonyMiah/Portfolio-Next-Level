"use client";

import React from "react";
import { PinContainer } from "./pin";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { TbListDetails } from "react-icons/tb";

const Project = () => {
  const data = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
      githubClientLink: "asdf",
      githubServerLink: "asdf",
      liveSite: "",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
      githubClientLink: "sdafds",
      githubServerLink: "sadf",
      liveSite: "",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
      githubClientLink: "asdf",
      githubServerLink: "sadf",
      liveSite: "",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: [
        "/next.svg",
        "/tail.svg",
        "/ts.svg",
        "/three.svg",
        "/gsap.svg",
      ],
      link: "https://github.com/adrianhajdin/iphone",
      githubClientLink: "sadf",
      githubServerLink: "asdf",
      liveSite: "",
    },
  ];

  return (
    <div className=" " id="project">
      <h1 className="text-5xl font-bold py-10 text-center text-white z-10">
        Recent projects
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-64 mt-10">
        {data.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[100vw]"
            key={item.id}
          >
            <PinContainer title="Visit" href={item.link}>
              <div
                className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[20vh] 
              lg:w-[60vh] lg:h-[40vh] mb-10"
              >
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                {/* <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div> */}

                {item.githubClientLink && (
                  <Link
                    href={item.githubClientLink ? item.githubClientLink : "/"}
                  >
                    <div className="flex justify-center items-center">
                      <FaGithub className="me-2 text-lg" color="#CBACF9" />
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Client
                      </p>
                    </div>
                  </Link>
                )}
                {item.githubServerLink && (
                  <Link
                    href={item.githubServerLink ? item.githubServerLink : "/"}
                  >
                    <div className="flex justify-center items-center">
                      <FaGithub className="me-2 text-lg" color="#CBACF9" />
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Server
                      </p>
                    </div>
                  </Link>
                )}
                <Link href={item.liveSite ? item.liveSite : "/"}>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </Link>

                <Link href={item.liveSite ? item.liveSite : "/"}>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Details
                    </p>
                    <TbListDetails className="ms-3" color="#CBACF9" />
                  </div>
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
