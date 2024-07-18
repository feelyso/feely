import { checkWorkspaceExistanceServer } from "app/api/apiServerActions/workspaceApiServerActions";
import protectRoute from "app/utils/protectedRoute";
import { redirect } from "next/navigation";
import React from "react";

export interface IPropsDynamicRoute {
  params: {
    org: string;
  };
}

const InsideOrg = async ({ params: { org } }: IPropsDynamicRoute) => {
  await protectRoute(`/${org}`);
  redirect(`/${org}/ideas`);
};

export default InsideOrg;
