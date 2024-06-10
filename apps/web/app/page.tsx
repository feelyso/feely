"use client";

// Import core
import Link from "next/link";
// Import custom
import { GridBackground } from "@components/waitlist/grid-background";
import WaitlistForm from "@components/waitlist/waitlist-form";
import Logo from "@components/waitlist/logo";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Link href="/" passHref legacyBehavior>
        <Logo />
      </Link>
      <WaitlistForm />
      <GridBackground />
    </main>
  );
}
