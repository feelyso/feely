import { redirect } from "next/navigation";
import { createClient } from "utils/supabase/server";

const autoLogin = async (subdomain: string = "") => {
  const supabase = createClient();

  const { data } = await supabase.auth.getSession();
  console.log("Session", data);
  if (data.session) {
    return redirect(`/`);
  }
};
export default autoLogin;
