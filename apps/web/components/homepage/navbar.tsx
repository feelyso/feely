import React from "react";
import Link from "next/link";
import Logo from "@components/homepage/logo";
import { Button } from "@feely/ui/components/button";
import { Mail } from "@feely/ui/components/icon";
// import { createClient } from "@utils/supabase/server";

export default function Navbar() {
  // const supabase = createClient();

  /*
  {data.session ? (
        <>
          <Link href="/redirect_to_workspace" className="bg-red">
            Go to your dashboard
          </Link>
        </>
      ) : (
        <Link href="/login" className="bg-red">
          Login
        </Link>
      )}
  */

  /*
  <Button variant="text" icon asChild className="flex sm:hidden">
    <Link href="/waitlist">
      <Mail size={16} />
    </Link>
  </Button>
  */

  // const { data } = await supabase.auth.getSession();
  return (
    <nav className="border-b-default bg-background fixed left-0 top-0 z-50 flex h-12 w-screen items-center border-b sm:h-14">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 sm:px-6">
        <Link href="/" passHref legacyBehavior>
          <Logo />
        </Link>
        <Button asChild className="button-waitlist hidden sm:flex">
          <Link href="/waitlist">Join the waitlist</Link>
        </Button>
        <Button variant="text" asChild className="flex sm:hidden">
          <Link href="/waitlist">Join the waitlist</Link>
        </Button>
      </div>
    </nav>
  );
}
