import React from "react";
import Link from "next/link";
import Logo from "@components/waitlist/logo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-screen">
      <Link href="/" passHref legacyBehavior>
        <Logo />
      </Link>
      {children}
    </main>
  );
}
