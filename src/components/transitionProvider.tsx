"use client";

import { motion, AnimatePresence, easeOut } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import Navbar from "./navbar";

const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="h-screen w-screen bg-gradient-to-b from-blue-50 to-red-100 "
      >
        <motion.div
          className="h-screen w-screen fixed rounded-b-[100px] bg-black  z-20 "
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.3, ease: easeOut }}
        ></motion.div>
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-4xl cursor-default z-50 w-fit h-fit "
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          {pathname === "/" ? "home" : pathname.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed rounded-t-[100px] bottom-0 bg-black z-20 "
          initial={{ height: "140vh" }}
          animate={{
            height: "0vh",
          }}
          transition={{ duration: 0.3, ease: easeOut, delay: 0.3 }}
        ></motion.div>
        <Navbar />
        <div className="h-[calc(100vh-5rem)] w-screen">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
