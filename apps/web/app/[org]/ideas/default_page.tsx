import { Button } from "@feely/ui/components/button";
import protectRoute from "app/utils/protectedRoute";
import Link from "next/link";
import React from "react";

interface IProps {
  org: string;
}

const Ideas = async ({ org }: IProps) => {
  return (
    <div>
      Ideas
      <Link href={`/${org}/ideas/new_idea`}>
        <Button>New idea</Button>
      </Link>
      <div
        style={{
          width: 500,
          height: 500,
          background: "red",
        }}></div>
    </div>
  );
};

export default Ideas;
