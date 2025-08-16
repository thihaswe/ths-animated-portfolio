"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Page = () => {
  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "my foodie pos",
      desc: "POS system for restaurant.",
      img: "/myFoodiePos.png",
      link: "https://my-foodie-pos.vercel.app",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "my old portfolio",
      desc: "It was my very first portfolio ever hosted on Vercel. I designed everything.",
      img: "/myPortfolio.png",
      link: "https://my-portfolio-thihaswe.vercel.app",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "my cash note app",
      desc: "This one is my second project after I finished my programming class. I mainly focused on login/logout system. I didn’t use any library, and it stores your login in the device by cookie token. It no longer works as the DB trial ended.",
      img: "/my-cash-note.png",
      link: "https://my-cash-note.vercel.app",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-140vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 0.5 }}
    >
      {/* Projects Section */}
      <div className="relative h-[500vh]" ref={containerRef}>
        <div className="h-[calc(100vh-5rem)] w-screen flex items-center justify-center text-center text-4xl md:text-6xl font-bold">
          My work
        </div>

        {/* Scrollable projects */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen bg-gradient-to-b from-blue-100 to-red-200" />

            {items.map((item) => (
              <div
                key={item.id}
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
              >
                <div className="flex flex-col items-center gap-6 text-white px-4 max-w-screen-md p-2">
                  <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                    {item.title}
                  </h1>

                  <div className="relative w-full max-w-[300px] h-[180px] md:max-w-[400px] md:h-[220px]  lg:h-[250px]  xl:h-[300px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>

                  <p className="text-sm sm:text-base text-justify">
                    {item.desc}
                  </p>

                  <Link
                    href={item.link}
                    target="_blank"
                    className="w-full flex justify-end"
                  >
                    <button className=" px-4 py-2 md:px-6 md:py-3 bg-red-500 rounded-md text-white font-medium text-sm md:text-base">
                      See demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hire Me Section */}
      <div className="h-screen w-screen flex justify-center items-center flex-col px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold mb-6">
          Do you have a project?
        </h1>

        <div className="relative">
          <motion.svg
            viewBox="0 0 300 300"
            className="w-56 h-56 md:w-[500px] md:h-[500px]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
            style={{ pointerEvents: "none" }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath">
                fullstack-developer and still learning
              </textPath>
            </text>
          </motion.svg>

          <Link
            href="/contact"
            className="w-14 h-14 md:w-24 md:h-24 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-xs md:text-base"
            style={{ pointerEvents: "auto" }}
          >
            Hire me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
