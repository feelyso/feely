"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface IProps {
  org: string;
}

const Navbar = ({ org }: IProps) => {
  const pathname = usePathname();

  // Function to check if the route is active
  const isActive = (route: string) => {
    return pathname.split("/")[2] === route;
  };
  return (
    <ul className="flex gap-4 p-8">
      <li className={isActive("ideas") ? "text-red-700" : ""}>
        <Link href={`/${org}/ideas`}>Ideas</Link>
      </li>
      <li className={isActive("roadmap") ? "text-red-700" : ""}>
        <Link href={`/${org}/roadmap`}>Roadmap</Link>
      </li>
    </ul>
  );
};

export default Navbar;
