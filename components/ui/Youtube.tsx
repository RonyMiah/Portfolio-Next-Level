"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";

export function Youtube() {
  return (
    <div className="flex flex-col overflow-hidden -mt-36 ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <Link href="https://www.youtube.com/@booleanprogrammers">
                Channel on YouTube
              </Link>
              <br />
              <Link href="https://www.youtube.com/@booleanprogrammers">
                <span className="text-2xl  font-bold mt-1 leading-none">
                  Boolean Programmers
                </span>
              </Link>
            </h1>
          </>
        }
      >
        <Image
          src={`https://i.ibb.co/F7XrmYp/Screenshot-2024-07-03-at-1-01-34-AM.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

