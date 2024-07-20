"use client";

import { Button } from "@feely/ui/components/button";
import { IconArrowUp } from "@tabler/icons-react";
import { useGetIdeasByWorkspaceName, useVoteIdea } from "app/api/controllers/ideaController";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
  org: string;
}

const Ideas = ({ org }: IProps) => {
  const { data: ideas } = useGetIdeasByWorkspaceName({ workspaceName: org });
  console.log("Ideas", ideas);
  const router = useRouter();
  const handleClickIdea = (id: string) => {
    console.log("Clicked idea", id);
    router.push(`/${org}/ideas/${id}`);
  };

  const { mutate: voteIdea } = useVoteIdea();

  const handleVoteIdea = (id: string, isVoted: boolean) => {
    voteIdea({ id, isVoted: !isVoted });
  };

  return (
    <div>
      Ideas
      <Link href={`/${org}/ideas/new_idea`}>
        <Button>New idea</Button>
      </Link>
      <div className="flex size-[500px] flex-col gap-2 overflow-auto bg-red-500 p-2">
        {ideas?.data.ideas.map((idea) => {
          return (
            <div
              key={idea.id}
              className="flex cursor-pointer gap-2 rounded-md border-2 border-white p-2"
              onClick={() => handleClickIdea(idea.id)}>
              <img src={idea.author.image_url ?? undefined} className="h-10 w-10 rounded-full" />
              <div className="flex flex-1 flex-col">
                <h1 className="text-lg-semibold">{idea.title}</h1>
                <p>{idea.description}</p>
                <p>by {idea.author.name}</p>
              </div>

              <Button
                className={idea.isVoted ? "" : "border-2 border-white bg-transparent"}
                onClick={(ev) => {
                  ev.stopPropagation();
                  ev.preventDefault();
                  handleVoteIdea(idea.id, idea.isVoted);
                }}>
                <IconArrowUp />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ideas;
