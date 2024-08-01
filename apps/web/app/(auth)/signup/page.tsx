import React from "react";
import WorkspaceInputField from "@components/auth/workspace";

const Signup = async () => {
  return (
    <div className="relative z-30 flex flex-col items-center justify-center gap-8 p-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-display-website">
          Welcome to <span className="text-brand-gradient">feely</span>
        </h1>
        <p className="text-md text-description">Let&apos;s start by seting up your company.</p>
      </div>
      <WorkspaceInputField />
    </div>
  );
};

export default Signup;
