import { redirect } from "next/navigation";
import React from "react";
import { createClient } from "utils/supabase/server";

interface IProps {
  subdomain?: string;
}

const AuthButtons = ({ subdomain = "" }: IProps) => {
  const handleGoogleLogin = async () => {
    "use server";
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
      },
    });
    if (data.url) {
      return redirect(data.url);
    }
    console.log("Data", data);
    if (error) {
      console.error("Error logging in with Google:", error.message);
    }
  };

  const handleLoginUserPass = async (e: any) => {
    "use server";
    const user = e.get("userName");
    const password = e.get("password");
    const supabase = createClient();
    console.log("User", user, password);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: user,
      password: password,
    });
    console.log("Data", data);
    if (error) {
      console.error("Error logging in with password:", error.message);
    } else {
      // return redirect(`/`);
    }
  };

  return (
    <>
      <form action={handleGoogleLogin}>
        <button>LogIn</button>
      </form>
      <form action={handleLoginUserPass} className="mt-4 flex flex-col gap-4">
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
      </form>
    </>
  );
};
export default AuthButtons;
