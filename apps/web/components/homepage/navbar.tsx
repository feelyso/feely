"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@components/homepage/logo";
import SessionButton from "@components/homepage/session-button";
import { Loader } from "@feely/ui/components/icon";

export default function Navbar() {
  const [dashboardButton, setDashboardButton] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const loadDashboardButton = async () => {
      setDashboardButton(await SessionButton());
    };

    loadDashboardButton();
  }, []);

  return (
    <nav className="border-b-default bg-background fixed left-0 top-0 z-50 flex h-12 w-screen items-center border-b sm:h-14">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 sm:px-6">
        <Link href="/" passHref legacyBehavior>
          <Logo />
        </Link>
        {dashboardButton ?? <Loader />}
      </div>
    </nav>
  );
}
