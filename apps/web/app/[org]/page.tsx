import React from "react";
import { redirect } from "next/navigation";
import protectRoute from "@app/utils/protectedRoute";

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
