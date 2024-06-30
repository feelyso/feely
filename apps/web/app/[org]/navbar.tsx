"use client";

import { Button } from "@feely/ui/components/button";
import { logoutUser } from "app/api/apiServerActions/userApiServerActions";
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
    <div className="flex justify-between  p-8">
      <ul className="flex gap-4">
        <li className={isActive("ideas") ? "text-red-700" : ""}>
          <Link href={`/${org}/ideas`}>Ideas</Link>
        </li>
        <li className={isActive("roadmap") ? "text-red-700" : ""}>
          <Link href={`/${org}/roadmap`}>Roadmap</Link>
        </li>
      </ul>
      <Button
        onClick={async (e) => {
          e.preventDefault();
          e.stopPropagation();
          await logoutUser();
        }}>
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
