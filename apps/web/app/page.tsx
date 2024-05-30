"use client";

// Import core
// Import custom
import { GridBackground } from "@components/waitlist/grid-background";
import WaitlistForm from "@components/waitlist/waitlist-form";
import Pictogram from "@components/waitlist/pictogram";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Pictogram />
      <WaitlistForm />
      <GridBackground />
    </main>
  );
}
