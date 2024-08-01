import React from "react";
import { LoaderCircle } from "@feely/ui/components/icon";

export default function Loading() {
  return (
    <div className="flex size-full min-h-[80vh] items-center justify-center">
      <LoaderCircle className="stroke-icon animate-spin" />
    </div>
  );
}
