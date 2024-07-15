"use client";
import client, { FeelyRequest } from "app/api/apiClient";
import { Endpoints } from "app/api/endpoints";
import { useMutation } from "react-query";

export const useCheckWorkspaceExistance = () => {
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
};

export const useCreateWorkspace = () => {
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
