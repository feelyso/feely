import { redirect } from "next/navigation";
import { createClient } from "utils/supabase/server";

const protectRoute = async (subdomain: string = "") => {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return redirect(`${subdomain}/login`);
  }
  return session;
};
export default protectRoute;
