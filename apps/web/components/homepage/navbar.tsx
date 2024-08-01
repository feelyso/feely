"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@components/homepage/logo";
import SessionButton from "@components/homepage/session-button";
import { Skeleton } from "@feely/ui/components/skeleton";

export default function Navbar() {
  const [dashboardButton, setDashboardButton] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const loadDashboardButton = async () => {
      setDashboardButton(await SessionButton());
    };

    loadDashboardButton();
  }, []);

  return (
    <nav className="border-b-default bg-background fixed left-0 top-0 z-50 flex h-14 w-screen items-center border-b">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 sm:px-6">
        <Link href="/" passHref legacyBehavior>
          <Logo />
        </Link>
        {dashboardButton ?? <Skeleton shape="line" className="h-9 w-32 rounded-md" />}
      </div>
    </nav>
  );
}
