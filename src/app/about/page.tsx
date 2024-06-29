"use client";
import Brain from "@/components/brain";
import { easeInOut, motion, useInView, useScroll } from "framer-motion";
import React, { MutableRefObject, useRef } from "react";

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-50px" });

  const experienceRef = useRef<HTMLDivElement>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-140vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex h-full overflow-auto " ref={containerRef}>
        {/* {text container} */}
        <div className="sm:px-8 md:px-12 lg:px-20 xl:px-36 flex flex-col gap-10 w-2/3 xl:w-1/2 ">
          {/* {biography} */}
          <div className="mt-10">
            <h1 className="text-4xl mb-5">BIOGRAPHY</h1>
            <span>
              Hi, I'm Thiha Swe, a passionate web developer,with a background in
              computer service technician . Inspired by my curiosity for
              technology, I've transitioned into web development through
              self-learning and coding bootcamps. Skilled in technologies like
              HTML, CSS, and JavaScript, I specialize in frameworks such as
              React and NextJs. My journey reflects a dedication to continuous
              learning and problem-solving, aiming to leverage my unique
              background to create impactful web experiences. Let's build
              something amazing together!
            </span>
          </div>
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            initial={{ opacity: 0, y: "-10px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>

          {/* {skills} */}
          <div ref={skillRef}>
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.3, ease: easeInOut }}
              className="text-4xl mb-10"
            >
              Skills
            </motion.h1>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={isSkillRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.3, ease: easeInOut }}
            >
              <div className="flex flex-wrap gap-3">
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Html
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Css
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JavaScript
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  TypeScript
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  React.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Next.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Tailwind CSS
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Material UI
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  PostgreSQL
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Node.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Express.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Redux
                </div>
                {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Nest.js
                  </div> */}
                {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Framer Motion
                </div> */}
                {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  SCSS
                </div> */}
                {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MongoDB
                </div> */}
                {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Spring Boot
                </div> */}
                {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  GraphQL
                </div> */}
                {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Prisma
                </div> */}
                {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Three.js
                </div> */}
                {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  WebGL
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Webpack
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Vite
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Docker
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  AWS
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Firebase
                </div> */}
                {/* <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Figma
                </div> */}
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Git
                </div>
              </div>
            </motion.div>
          </div>
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            initial={{ opacity: 0, y: "-10px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
          {/* {experience} */}
          <div className=" pb-96" ref={experienceRef}>
            <motion.h1
              initial={{ x: "-150vw" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ ease: easeInOut }}
              className="text-4xl mb-14"
            >
              Experience
            </motion.h1>

            {/* {job - 1 } */}
            <div className="flex justify-between h-48">
              {/* {left } */}
              <div className="w-1/3">
                {/* {jobTitle} */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Sales Promoter
                </div>
                {/* {jobDesc} */}
                {/* <div className="p-3 text-sm italic">
                  My current employment.Way better than the position before!
                </div> */}
                {/* {jobDate} */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2019
                </div>
                {/* { jobCompany  } */}
                <div className="rounded p-1 w-fit bg-white text-sm font-semibold">
                  Samsung
                </div>
              </div>
              {/* {middle} */}
              <div className="flex justify-center">
                <div className="w-1 h-full bg-black relative">
                  <div className=" ring-2 ring-red-500 absolute -left-2 bg-white rounded-full h-5 w-5"></div>
                </div>
              </div>
              {/* {right} */}
              <div className="w-1/3"></div>
            </div>
            {/* {job} - 2 */}
            <div className="flex justify-between h-48 flex-row-reverse">
              {/* {left } */}
              <div className="w-1/3">
                {/* {jobTitle} */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Junior Service Technician
                </div>
                {/* {jobDesc} */}
                {/* <div className="p-3 text-sm italic">
                  My current employment.Way better than the position before!
                </div> */}
                {/* {jobDate} */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2023
                </div>
                {/* { jobCompany  } */}
                <div className="rounded p-1 w-fit bg-white text-sm font-semibold">
                  Computer Service Shwe Latt Taw
                </div>
              </div>
              {/* {middle} */}
              <div className="flex justify-center">
                <div className="w-1 h-full bg-black relative">
                  <div className=" ring-2 ring-red-500 absolute -left-2 bg-white rounded-full h-5 w-5"></div>
                </div>
              </div>
              {/* {right} */}
              <div className="w-1/3"></div>
            </div>
            {/* {job - 3} */}
            <div className="flex justify-between h-48">
              {/* {left } */}
              <div className="w-1/3">
                {/* {jobTitle} */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Delivery
                </div>
                {/* {jobDesc} */}
                {/* <div className="p-3 text-sm italic">
                  My current employment.Way better than the position before!
                </div> */}
                {/* {jobDate} */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2021 - 2023
                </div>
                {/* { jobCompany  } */}
                <div className="rounded p-1 w-fit bg-white text-sm font-semibold">
                  YGN Delivery Service
                </div>
              </div>
              {/* {middle} */}
              <div className="flex justify-center">
                <div className="w-1 h-full bg-black relative">
                  <div className=" ring-2 ring-red-500 absolute -left-2 bg-white rounded-full h-5 w-5"></div>
                </div>
              </div>
              {/* {right} */}
              <div className="w-1/3"></div>
            </div>
          </div>
        </div>
        {/* {brain svg} */}
        <div className="hidden w-1/3 xl:w-1/2 sticky top-0 lg:block">
          <Brain scrollYprogress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
