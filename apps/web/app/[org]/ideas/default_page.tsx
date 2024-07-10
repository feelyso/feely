"use client";

import { Button } from "@feely/ui/components/button";
import { getIdeasByWorkspaceName } from "app/api/apiServerActions/ideaApiServerActions";
import protectRoute from "app/utils/protectedRoute";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IProps {
  org: string;
}

const Ideas = ({ org }: IProps) => {
  const [ideas, setIdeas] = useState<any[]>([]);

  useEffect(() => {
    const getIdeas = async () => {
      const res = await getIdeasByWorkspaceName({ workspaceName: org });
      if (!res.data) return console.error("No ideas found");
      setIdeas(res.data);
    };
    getIdeas();
  }, []);

  return (
    <div>
      Ideas
      <Link href={`/${org}/ideas/new_idea`}>
        <Button>New idea</Button>
      </Link>
      <div className="flex h-[500px] w-[500px] flex-col gap-2 overflow-auto bg-red-500 p-2">
        {ideas.map((idea) => {
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
