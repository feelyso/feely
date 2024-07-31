import React from "react";
import Link from "next/link";
import Logo from "@components/homepage/logo";
import SessionButton from "@components/homepage/session-button";

export default function Navbar() {
  return (
    <nav className="border-b-default bg-background fixed left-0 top-0 z-50 flex h-12 w-screen items-center border-b sm:h-14">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 sm:px-6">
        <Link href="/" passHref legacyBehavior>
          <Logo />
        </Link>
        <SessionButton />
      </div>
    </nav>
  );
}
