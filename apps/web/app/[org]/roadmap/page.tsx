import { Button } from "@feely/ui/components/button";
import { Separator } from "@feely/ui/components/separator";
import Link from "next/link";
import React from "react";

const Roadmap = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-heading-section">Roadmap</h2>
        <Button asChild>
          <Link href={`/`}>New idea</Link>
        </Button>
      </div>
      <Separator />
      <div className="h-96 w-full bg-red-300"></div>
    </div>
  );
};

export default Roadmap;
