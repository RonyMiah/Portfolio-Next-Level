"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
          className="w-[298px] h-[298px] xl:w-[298px] xl:h-[298px] mix-blend-lighten absolute mx-auto "
        >
          <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/041/642/170/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain mx-auto "
          />
        </motion.div>
      </motion.div>
      {/* Circle  */}
      {/* <motion.svg
        // className="w-[60vh] h-[58vh] "
        // fill="transparent"
        // xmlns="http/www.w3.org/2000/svg"
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
