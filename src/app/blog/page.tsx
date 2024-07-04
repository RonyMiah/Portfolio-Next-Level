"use client"

import { useEffect, useState } from "react";
import { BlogPostCard } from "./BlogPostCard";
import Link from "next/link";
import { FaBackward } from "react-icons/fa";


  

// const blogPosts = [
//   {
//     id: 1,
//     title: "Understanding React.js",
//     description: "A deep dive into React.js and its core concepts.",
//     img: "/images/react.png",
//   },
//   {
//     id: 2,
//     title: "Next.js for Beginners",
//     description: "An introduction to Next.js and its features.",
//     img: "/images/next.png",
//   },
//   // Add more blog posts as needed
// ];

export default function Blog() {
  const [data, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://prothfolio-backend.vercel.app/api/v1/blog"
        );
        const data = await res.json();
        setProjectsData(data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProjects();
  }, []);

  if (!data) {
    <h2>Loading ....</h2>;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <button className="mb-4  text-white px-4 py-2 rounded hover:bg-blue-700">
          <FaBackward />
        </button>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>

      <div className="">
        {data.map((post: any) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
