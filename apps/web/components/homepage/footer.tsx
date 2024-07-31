import React from "react";
import Link from "next/link";
import { Separator } from "@feely/ui/components/separator";
import { GithubIcon, LinkedinIcon, SlackIcon } from "@components/homepage/social-icon";

export default function Footer() {
  return (
    <footer id="footer" className="bg-subtle relative z-20 w-screen">
      <div className="container mx-auto grid max-w-screen-lg gap-6 px-5 py-8 sm:px-6">
        <div className="grid items-center justify-between gap-6 sm:flex">
          <div className="flex items-center justify-center space-x-3">
            <h3 className="text-heading-subsection tracking-tight">feely</h3>
            <Separator orientation="vertical" className="h-4" />
            <p className="text-description">And they will feel part of it.</p>
          </div>
          <div className="flex items-center justify-normal space-x-3 sm:justify-center">
            <Link
              href="https://github.com/feelyso/feely"
              className="opacity-85 hover:cursor-pointer hover:opacity-100">
              <GithubIcon />
            </Link>
            <Link href="/" className="opacity-85 hover:cursor-pointer hover:opacity-100">
              <SlackIcon />
            </Link>
            <Link href="/" className="opacity-85 hover:cursor-pointer hover:opacity-100">
              <LinkedinIcon />
            </Link>
          </div>
        </div>
        <Separator />
        <div className="grid items-center justify-between gap-6 sm:flex">
          <div>
            <p className="text-placeholder text-md">© 2024 Feely Inc.</p>
          </div>
          <div className="grid justify-normal gap-4 sm:flex sm:justify-center">
            <Link href="/" className="text-description text-md hover:text hover:cursor-pointer">
              Terms of Service
            </Link>
            <Link href="/" className="text-description text-md hover:text hover:cursor-pointer">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
