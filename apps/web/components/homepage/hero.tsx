import React from "react";
import Link from "next/link";
import { Button } from "@feely/ui/components/button";
import { Tag } from "@feely/ui/components/tag";
import GridBackground from "@components/homepage/grid-background";
import HeroImg from "@components/homepage/hero-img";

export default function Hero() {
  return (
    <section id="hero" className="xs:pb-32 relative z-20 w-screen pb-48 sm:pb-28 md:pb-16">
      <div className="relative z-20 mx-auto grid w-full max-w-screen-lg justify-items-center px-5 pt-28 sm:px-6 sm:pt-32">
        <Tag colors="violet">Now in waitlist</Tag>
        <div className="mt-6 grid max-w-screen-md justify-items-center gap-5 text-center">
          <h1 className="text-heading-screen sm:text-display-website">
            <span className="text-brand-gradient">User feedbacks</span> get real by being rewarded
          </h1>
          <p className="text-description max-w-screen-sm text-lg">
            Feely is a spot where user thoughts become a treasure. <br />
            More than giving users a voice: it&apos;s encouraging them to listen to each other, through
            conversations and rewarding. <br />
            The result? A product actually built for your people. And they will feel part of it.
          </p>
        </div>
        <div className="mt-8">
          <Button asChild className="button-waitlist">
            <Link href="/signup">Start for free</Link>
          </Button>
        </div>
        <HeroImg />
      </div>
      <GridBackground />
    </section>
  );
}
