"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

interface Prop {
  href: string;
  label: string;
}
const NavLink = ({ link }: { link: Prop }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link.href}
      className={`rounded p-1 text-lg font-semibold ${
        link.href === pathname && " text-white bg-black p-2"
      }`}
    >
      {link.label}
    </Link>
  );
};

export default NavLink;
