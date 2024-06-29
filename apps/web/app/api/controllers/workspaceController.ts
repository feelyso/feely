"use server";

import { Endpoints } from "app/api/endpoints";
import { createClient } from "utils/supabase/server";

export const checkWorkspaceExistance = async (workspaceName: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${Endpoints.workspace.checkExistance}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ workspaceName }),
  });

  const data = await response.json();
  return data.exists;
};

export const createWorkspace = async (workspaceName: string) => {
  const supabase = createClient();
  const { data: dataSession } = await supabase.auth.getSession();
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${Endpoints.workspace.createWorkspace}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${dataSession.session?.access_token}`,
      RefreshToken: dataSession.session?.refresh_token ?? "",
    },

    body: JSON.stringify({ workspaceName }),
  });

  // const data = await response.json();
  return false;
};
