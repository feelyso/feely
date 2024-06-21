import protectRoute from "app/utils/protectedRoute";
import React from "react";

export interface IPropsDynamicRoute {
  params: {
    org: string;
  };
}

const InsideOrg = async ({ params: { org } }: IPropsDynamicRoute) => {
  await protectRoute(`/${org}`);
  return <div>InsideOrg {org}</div>;
};

export default InsideOrg;
