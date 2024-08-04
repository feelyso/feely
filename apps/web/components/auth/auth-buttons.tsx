"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { FacebookIcon, GithubIcon, GoogleIcon } from "@components/homepage/social-icon";
import { createClient } from "@utils/supabase/client";
import { Button } from "@feely/ui/components/button";

const AuthButtons = () => {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/redirect_to_workspace";
  const workspace = searchParams.get("workspace");
  //If only one of next and workspace use that, otherwise concat with &
  const redirectString =
    next && workspace
      ? `?next=${next}&workspace=${workspace}`
      : next
      ? `?next=${next}`
      : workspace
      ? `?workspace=${workspace}`
      : "";
  const handleGoogleLogin = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback${redirectString}`,
      },
    });
    if (data.url) {
      try {
        return redirect(data.url);
      } catch (e) {
        console.log("Error redirect:", e);
      }
    }
    if (error) {
      console.error("Error logging in with Google:", error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleGoogleLogin}>
        <div className="flex w-full flex-col space-y-2">
          <Button variant="secondary" className="h-10 w-full">
            <GoogleIcon />
            Continue with Google
          </Button>
          <Button disabled variant="secondary" className="h-10 w-full">
            <GithubIcon />
            Continue with Github
          </Button>
          <Button disabled variant="secondary" className="h-10 w-full">
            <FacebookIcon />
            Continue with Facebook
          </Button>
        </div>
      </form>
      {/* <form onSubmit={handleLoginUserPass} className="mt-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          name="userName"
          className="rounded-md border px-4 py-2 text-black"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="rounded-md border px-4 py-2 text-black"
        />
        <button type="submit" className="rounded-md bg-blue-500 px-4 py-2 text-white">
          LogIn
        </button>
      </form> */}
    </>
  );
};
export default AuthButtons;