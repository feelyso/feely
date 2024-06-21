"use client";

import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React from "react";
import { createClient } from "utils/supabase/client";

const AuthButtons = () => {
  const searchParams = useSearchParams();
  const next = searchParams.get("next");
  const handleGoogleLogin = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback${next ? `?next=${next}` : ""}`,
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
        <button>LogIn</button>
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
