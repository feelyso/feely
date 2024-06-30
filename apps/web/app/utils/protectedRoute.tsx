import { redirect } from "next/navigation";
import { createClient } from "utils/supabase/server";

const protectRoute = async (redirectNext: string = "") => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return redirect(`/login${redirectNext ? `?next=${redirectNext}` : ""}`);
  }
  return session;
};
export default protectRoute;
