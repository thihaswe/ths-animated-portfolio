"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./navlink";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setOpen(false); // Close the menu if screen size is larger or equal to 768px
    }
  };

  // Effect to add event listener on component mount
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const topVariants = {
    open: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
    closed: {
      rotate: 0,
    },
  };
  const animationVariants: Variants = {
    open: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  };
  const bottomVariants = {
    open: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
    closed: {
      rotate: 0,
    },
  };
  const listVariant = {
    open: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    closed: {
      x: "100vw",
    },
  };

  const listItemVariant = {
    open: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: -10,
      opacity: 0,
    },
  };
  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },

    {
      href: "/my-work",
      label: "My Work",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];
  return (
    <div className="h-20 flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36">
      {/* {menus} */}
      <div className="hidden md:flex xl:w-1/3 ">
        {links.map((link) => {
          return (
            <div key={link.href} className="mr-8">
              <NavLink link={link} />
            </div>
          );
        })}
      </div>

      {/* {logo} */}
      <div
        className="block md:hidden xl:w-1/3
       lg:flex justify-center"
      >
        <Link href={"/"} className="flex bg-black p-2 rounded justify-center">
          <span className="mr-1 text-white font-semibold">ths</span>
          <span className="bg-white text-black font-bold rounded ">.dev</span>
        </Link>
      </div>
      {/* {responsive menus} */}
      <button
        className="flex md:hidden flex-col gap-2 z-50"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <motion.div
          variants={topVariants}
          animate={open ? "open" : "closed"}
          className="h-1 w-9 bg-black rounded origin-left "
        ></motion.div>
        <motion.div
          variants={animationVariants}
          animate={open ? "open" : "closed"}
          className="h-1 w-9 bg-black rounded "
        ></motion.div>
        <motion.div
          variants={bottomVariants}
          animate={open ? "open" : "closed"}
          className="h-1 w-9 bg-black rounded origin-left"
        ></motion.div>
      </button>
      {open && (
        <motion.div
          variants={listVariant}
          initial={"closed"}
          animate={"open"}
          className="h-screen w-screen top-0 left-0 text-3xl bg-black absolute flex flex-col justify-center items-center gap-8 z-10"
        >
          {links.map((link) => {
            return (
              <motion.div key={link.href} variants={listItemVariant}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="text-white"
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      )}
      {/* {icons} */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end ">
        <Link href="https://github.com/thihaswe">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/thiha-swe/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
