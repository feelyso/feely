import React from "react";
import Link from "next/link";
import { Button } from "@feely/ui/components/button";
import GridBackground from "@components/homepage/grid-background";

export default function Banner() {
  return (
    <section id="banner" className="border-default relative z-20 w-screen border-b">
      <div className="container relative z-20 mx-auto max-w-screen-lg px-5 py-16 text-center sm:px-6">
        <div className="grid gap-4">
          <h1 className="text-heading-screen">
            <span className="text-brand-gradient">User feedbacks</span> get real by being rewarded
          </h1>
          <p className="text-description text-lg">
            Build a product for your people. And they will feel part of it.
          </p>
        </div>
        <div className="mt-8">
          <Button asChild className="button-brand">
            <Link href="/waitlist">Join the waitlist</Link>
          </Button>
        </div>
      </div>
      <GridBackground />
    </section>
  );
}
