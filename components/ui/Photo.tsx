"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bannerImage from "../../public/bannerpic.png";

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-center  ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        {/* Image  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className=" xl:w-[700px] xl:h-[700px] mix-blend-lighten mx-auto "
        >
          <Image
            src={bannerImage}
            width={900}
            height={900}
            alt="banner image"
            className="object-contain mx-auto "
          />
        </motion.div>
      </motion.div>
      {/* Circle  */}
      {/* <motion.svg
        className="w-[60vh] h-[58vh] "
        fill="transparent"
        xmlns="http/www.w3.org/2000/svg"
      >
        <motion.circle
        className="w-[300px] h-[300px]"
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg> */}
    </div>
  );
};

export default Photo;
