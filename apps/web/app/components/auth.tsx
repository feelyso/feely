import { redirect } from "next/navigation";
import React from "react";
import { createClient } from "utils/supabase/server";

const AuthButtons = () => {
  const handleGoogleLogin = async () => {
    "use server";
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        // Uncomment the next line if you want to redirect the user to a specific URL after login
        redirectTo: "http://localhost:3000/auth/callback",
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

  return (
    <form action={handleGoogleLogin}>
      <button onClick={handleGoogleLogin}>LogIn</button>
    </form>
  );
};
export default AuthButtons;
