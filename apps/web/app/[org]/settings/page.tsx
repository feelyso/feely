import { Separator } from "@feely/ui/components/separator";
import React from "react";

const Settings = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex w-full items-center justify-start">
        <h2 className="text-heading-section">Settings</h2>
      </div>
      <Separator />
      <div className="h-96 w-full bg-red-300"></div>
    </div>
  );
};

export default Settings;
