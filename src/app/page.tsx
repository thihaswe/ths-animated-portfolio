"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-140vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 0.5 }}
    >
      <div className="block h-full lg:flex px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36">
        {/* {image container} */}
        <div className="h-1/2 w-screen lg:h-full lg:w-1/2 relative">
          <Image
            src={"/portfolio.png"}
            alt="hero.png"
            fill={true}
            className="object-contain"
          />
        </div>
        {/* {text container} */}
        <div className="h-1/2 w-screen lg:h-full lg:w-1/2 flex flex-col justify-center text-justify">
          <h1 className="text-5xl mb-8">my portfolio</h1>
          <span className="block">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </span>
          <div className="mt-5">
            <Link href={"/my-work"}>
              <button className="py-5 ring-1 ring-black rounded-lg px-3 mr-3 bg-black text-white">
                View My Works
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="py-5 ring-1 ring-black rounded-lg px-3">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
