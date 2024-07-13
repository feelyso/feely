"use client";
import client, { FeelyRequest } from "app/api/apiClient";
import { Endpoints } from "app/api/endpoints";
import { useMutation } from "react-query";
import { createClient } from "utils/supabase/client";

export const checkWorkspaceExistance = () => {
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

  return useMutation<{ data: { exists: boolean } }, null, string>(checkWorkspaceExistanceFunction, {});

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

export const createWorkspace = () => {
  const createWorkspaceFunction = async (workspaceName: string) => {
    const req: FeelyRequest = {
      url: Endpoints.workspace.createWorkspace,
      config: {
        method: "POST",
        data: JSON.stringify({ workspaceName }),
      },
    };
    return await client(req);
  };

  return useMutation<{ data: { message: string; id?: string; name?: string } }, null, string>(
    createWorkspaceFunction,
    {}
  );
};
