import React from "react";
import WorkspaceInputField from "app/components/workspace";

const Signup = async () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <p className="text-6xl">Welcome to feely</p>
      <h6>Let&apos;s start by seting up your company.</h6>
      <WorkspaceInputField />
    </div>
  );
};

export default Signup;
