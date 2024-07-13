"use client";
import client, { FeelyRequest } from "app/api/apiClient";
import { Endpoints } from "app/api/endpoints";
import { useMutation } from "react-query";
import { createClient } from "utils/supabase/client";

export const checkWorkspaceExistanceService = () => {
  // const queryClient = useQueryClient();

  const checkWorkspaceExistanceFunction = async (workspaceName: string) => {
    const req: FeelyRequest = {
      url: Endpoints.workspace.checkExistance,
      config: {
        method: "POST",
        data: JSON.stringify({ workspaceName }),
      },
    };
    return await client(req);
  };

  return useMutation(checkWorkspaceExistanceFunction, {});

  // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${Endpoints.workspace.checkExistance}`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ workspaceName }),
  // });

  // const data = await response.json();
  // return data.exists;
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
