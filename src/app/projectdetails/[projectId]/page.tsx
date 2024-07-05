"use client"


import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBackward } from "react-icons/fa";


const ProjectDetails = ({ params }: any) => {
    const id = params?.projectId;

    
    const [project, setProjectsData]: any = useState([]);

    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const res = await fetch(
            `https://prothfolio-backend.vercel.app/api/v1/project/${id}`
          );
          const data = await res.json();
          setProjectsData(data?.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchProjects();
    }, [id]);

 console.log(project);

//   const projects = [
//     {
//       id: 4,
//       title: "Animated Apple iPhone 3D Website",
//       des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
//       img: "/p4.svg",
//       link: "https://github.com/adrianhajdin/iphone",
//       githubClientLink: "sadf",
//       githubServerLink: "asdf",
//       liveSite: "asdfsdaf",
//     },
//   ];

  if (!project) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <Link href="/">
        <button className="mb-4 text-2xl text-black px-4 py-2 rounded 0">
          <FaBackward />
        </button>
      </Link>
      <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
        {project && (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full"
          >
            <Image
              width={1200}
              height={800}
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-contain rounded-md mb-6"
            />
            <h1 className="text-2xl font-bold text-black-100 mb-4">
              {project.title}
            </h1>
            <p className="text-gray-700 mb-6">{project.des}</p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Links:</h2>
              <div className="flex gap-4">
                {project.githubClientLink && (
                  <Link
                    href={project.githubClientLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline bg-purple px-6 py-3 rounded-xl "
                  >
                    GitHub Client
                  </Link>
                )}
                {project.githubServerLink && (
                  <Link
                    href={project.githubServerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline bg-purple px-6 py-3 rounded-xl "
                  >
                    GitHub Server
                  </Link>
                )}
                {project.liveSite && (
                  <Link
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline bg-purple px-6 py-3 rounded-xl "
                  >
                    Live Site
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
