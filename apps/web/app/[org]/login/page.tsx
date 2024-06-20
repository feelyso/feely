import { IPropsDynamicRoute } from "app/[org]/page";
import AuthButtons from "app/components/auth";
import autoLogin from "app/utils/autoLogIn";
import React from "react";

const LoginMulti = async ({ params: { org } }: IPropsDynamicRoute) => {
  // await autoLogin(org);
  return (
    <div>
      LoginMulti {org} <AuthButtons subdomain={`${org}.`} />
    </div>
  );
};

export default LoginMulti;
