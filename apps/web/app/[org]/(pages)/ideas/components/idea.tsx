"use client";

import { IdeaType } from "@app/types/idea";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@feely/ui/components/avatar";
import { Tag } from "@feely/ui/components/tag";
import { ChevronUp, HelpCircle, Loader } from "@feely/ui/components/icon";
import { Toggle } from "@feely/ui/components/toggle";
import { useVoteIdea } from "@app/api/controllers/ideaController";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface IProps {
  idea: IdeaType;
  org: string;
}

const IdeaCard = ({ idea, org }: IProps) => {
  const router = useRouter();
  const handleClickIdea = (id: string) => {
    router.push(`/${org}/ideas/${id}`);
  };

  const { mutate: voteIdea, isLoading: isLoadingVoteIdea } = useVoteIdea();

  const handleVoteIdea = (id: string, isVoted: boolean) => {
    voteIdea({ id, isVoted: !isVoted });
  };

  return (
    <div
      key={idea.id}
      className="hover:bg-item-hover active:bg-item-selected flex w-full cursor-pointer gap-2 rounded-md p-4"
      onClick={() => handleClickIdea(idea.id)}>
      <Avatar size="xl" className="border-default mt-1 border">
        <AvatarImage src={idea.author.image_url ?? undefined} alt={idea.author.name ?? undefined} />
        <AvatarFallback>{idea.author.name ? idea.author.name[0] : undefined}</AvatarFallback>
      </Avatar>
      <div className="flex w-full flex-col space-y-1 pr-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg-semibold line-clamp-1 pr-2">{idea.title}</h1>

          <Tag color="amber" className="min-w-fit">
            <HelpCircle />
            {idea.status.name}
          </Tag>
        </div>
        <p className="text-description text-md line-clamp-1">{idea.description}</p>
        <div className="pt-2">
          <p className="text-description text-sm">
            by <Link href="/">{idea.author.name}</Link> {new Date(idea.created_at).toLocaleDateString()}{" "}
            {idea.topic.name} - {idea.commentsCount} comments
          </p>
        </div>
      </div>
      <Toggle
        aria-label="vote"
        variant="outline"
        className="flex h-14 w-11 flex-col items-center justify-items-center gap-0 space-y-0 p-1"
        pressed={idea.isVoted}
        onClick={(ev) => {
          ev.stopPropagation();
          ev.preventDefault();
          handleVoteIdea(idea.id, idea.isVoted);
        }}>
        <ChevronUp size={24} />
        {isLoadingVoteIdea ? <Loader /> : <p className="text-md">{idea.voters.length}</p>}
      </Toggle>
    </div>
  );
};

export default IdeaCard;
