import { createClient } from "@utils/supabase/server";
import { NextRequest } from "next/server";

export const authenticateUser = async (req: NextRequest) => {
  const supabase = createClient();
  const accessToken = req.headers.get("Authorization")?.split("Bearer ")[1];
  const refreshToken = req.headers.get("RefreshToken");
  if (!accessToken || !refreshToken) {
    return null;
  }
  const { data, error } = await supabase.auth.getUser(accessToken ?? undefined);
  if (error) {
    return null;
  }
  return { user: data.user, accessToken, refreshToken };
};
