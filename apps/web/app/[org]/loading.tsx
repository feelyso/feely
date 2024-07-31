import React from "react";
import { LoaderCircle } from "@feely/ui/components/icon";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <LoaderCircle className="stroke-icon animate-spin" />
    </div>
  );
}
