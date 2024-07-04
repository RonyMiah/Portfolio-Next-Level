"use client"

import React from "react";
import { Meteors } from "../../../components/ui/meteors";


export function BlogPostCard({ post }:any) {
    console.log(post);
    const jsxContent = {
      content: <div dangerouslySetInnerHTML={{ __html: post.content }} />,
    };
  return (
    <div className="">
      <div className=" w-full  ">
        <div className="" />
        <div className="">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {post.title}
          </h1>

          {jsxContent.content}

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
