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
      title: "my foodie pos ",
      desc: "this includes two apps , for the order and the backoffice. In back office, you can create menu and manage orders.In the order app , you can order the menus. Note, orderapp will always takes you to the table 1",
      img: "/myFoodiePos.png",
      link: "https://my-foodie-pos.vercel.app",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "my old portfolio",
      desc: "It was my very first portfolio ever hosted on vercel. I design everything.",
      img: "/myPortfolio.png",
      link: "https://my-portfolio-thihaswe.vercel.app",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "my cash note app",
      desc: "this one is my second projects after I finished my programming class.J mainly focus on log in , log out system.I didn't use any library and it stores your login in the device by token in cookies.It no longer works due to the database trial is end.",
      img: "/my-cash-note.png",
      link: "https://my-cash-note.vercel.app",
    },
    // {
    //   id: 4,
    //   color: "from-purple-300 to-red-300",
    //   title: "Spotify Music App",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   link: "https://lama.dev",
    // },
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
      {
        // projects body
        <div className="relative h-[500vh]" ref={containerRef}>
          {/* {my works} */}
          <div className="h-[calc(100vh-5rem)] w-screen flex items-center justify-center text-center text-6xl">
            My work
          </div>
          {/* projects*/}
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div style={{ x: x }} className="flex">
              <div className="h-screen w-screen bg-gradient-to-b from-blue-100 to-red-200"></div>
              {items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                  >
                    <div className="flex flex-col gap-6 text-white">
                      <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                        {item.title}
                      </h1>
                      <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[250px] xl:w-[600px] xl:h-[300px] ">
                        <Image src={item.img} alt="" fill />
                      </div>
                      <p className="w-80  md:96 lg:w-[500] xl:w-[600]">
                        {item.desc}
                      </p>
                      <Link href={item.link} className=" flex justify-end">
                        <button className="p-2 text-sm md:pd-4 lg:p-6 font-semibold bg-red-500">
                          see demo
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      }

      {/* {hire me} */}
      <div className="h-screen w-screen flex justify-center flex-col items-center">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl">do you have a project?</h1>
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
              className="w-14 h-14 md:w-24 md:h-24 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
              href="/contact"
              style={{ pointerEvents: "auto" }}
            >
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
