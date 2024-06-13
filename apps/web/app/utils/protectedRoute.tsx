import { redirect } from "next/navigation";
import { createClient } from "utils/supabase/server";

const protectRoute = async () => {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return redirect("/login");
  }
};
export default protectRoute;
