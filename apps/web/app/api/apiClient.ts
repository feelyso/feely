import { createClient } from "@utils/supabase/client";
import axios, { Method } from "axios";

export interface FeelyRequest {
  url: string;
  config: {
    method: Method;
    data?: unknown;
  };
}

const client = async (req: FeelyRequest) => {
  const supabase = createClient();
  const { data: dataSession } = await supabase.auth.getSession();
  console.log("Data session", dataSession);
  const { url, config } = req;
  const baseUrl =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
      ? "https://" + process.env.NEXT_PUBLIC_VERCEL_URL
      : process.env.NEXT_PUBLIC_BASE_URL + "/";
  return axios(`${baseUrl}${url}`, {
    ...config,
    ...(dataSession && {
      headers: {
        Authorization: `Bearer ${dataSession.session?.access_token}`,
        RefreshToken: dataSession.session?.refresh_token ?? "",
      },
    }),
  });
};

export default client;
