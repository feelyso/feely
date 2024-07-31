"use server";

import { redirect } from "next/navigation";
import { createClient } from "utils/supabase/server";

export const logoutUser = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error logging out:", error.message);
  }
  redirect("/");
};
