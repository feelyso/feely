import React from "react";
import { Button } from "@feely/ui/components/button";
import { Tag } from "@feely/ui/components/tag";
import { ContainerScroll } from "@components/homepage/container-scroll";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative z-20 w-screen">
      <div className="relative z-20 mx-auto grid w-full max-w-screen-lg justify-items-center px-6 pb-20 pt-32">
        <Tag colors="violet">now in waitlist</Tag>
        <div className="mt-6 grid max-w-screen-md gap-5 text-center">
          <h1 className="text-display-website">
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
            <Link href="/waitlist">Join the waitlist</Link>
          </Button>
        </div>
        <ContainerScroll>
          <Image
            src={"/images/hero.png"}
            alt="Picture of the product"
            height={720}
            width={1400}
            className="mx-auto h-full rounded-2xl object-cover object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <div className="bg-grid-[#000000]/[.05] dark:bg-grid-[#ffffff]/[.05] absolute left-0 top-0 z-10 h-full w-screen">
        <div className="bg-background pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
