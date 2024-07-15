"use client";

import { Button } from "@feely/ui/components/button";
import { useGetIdeasByWorkspaceName } from "app/api/controllers/ideaController";
import Link from "next/link";
import React from "react";

interface IProps {
  org: string;
}

const Ideas = ({ org }: IProps) => {
  const { data: ideas } = useGetIdeasByWorkspaceName({ workspaceName: org });
  console.log("Ideas", ideas);
  return (
    <div>
      Ideas
      <Link href={`/${org}/ideas/new_idea`}>
        <Button>New idea</Button>
      </Link>
      <div className="flex size-[500px] flex-col gap-2 overflow-auto bg-red-500 p-2">
        {ideas?.data.ideas.map((idea) => {
          return (
            <div key={idea.id} className="rounded-md border-2 border-white p-2">
              <h1>{idea.title}</h1>
              <p>{idea.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ideas;
