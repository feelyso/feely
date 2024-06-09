"use client";

import { ModeToggle } from "@components/mode-toggle";
import AuthButtons from "app/components/auth";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <AuthButtons />
    </main>
  );
}
