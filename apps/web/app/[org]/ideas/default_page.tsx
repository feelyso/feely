"use client";

import { Button } from "@feely/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@feely/ui/components/dropdown-menu";
import { Input } from "@feely/ui/components/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@feely/ui/components/select";
import { IconArrowUp } from "@tabler/icons-react";
import { useGetIdeasByWorkspaceName, useVoteIdea } from "app/api/controllers/ideaController";
import { StatusType } from "app/types/status";
import { TopicType } from "app/types/topic";
import useDebounce from "app/utils/useDebounce";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IdeasOrderingOptions, IIdeasOrdering } from "app/types/DTO/getIdeasByWorkspaceNameDTO";

interface IProps {
  org: string;
  topics: TopicType[];
  statuses: StatusType[];
}

const Ideas = ({ org, topics, statuses }: IProps) => {
  const {
    mainState: mainSearchTitle,
    slaveState: searchTitleFastRefreshing,
    setSlaveState: setDebounced,
  } = useDebounce(1000);

  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const [selectedOrder, setSelectedOrder] = useState<IIdeasOrdering>("latest");

  const { data: ideas } = useGetIdeasByWorkspaceName({
    workspaceName: org,
    title: mainSearchTitle,
    topicId: selectedTopics.length === 0 ? undefined : selectedTopics,
    statusId: selectedStatuses.length === 0 ? undefined : selectedStatuses,
    orderBy: selectedOrder,
  });
  const router = useRouter();
  const handleClickIdea = (id: string) => {
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
        <Input
          value={searchTitleFastRefreshing}
          onChange={(ev) => setDebounced(ev.target.value)}
          placeholder="Search ideas..."
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              Filters{" "}
              {selectedTopics.length + selectedStatuses.length > 0
                ? `(${selectedTopics.length + selectedStatuses.length})`
                : ""}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Topics</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {topics.map((topic) => {
              return (
                <DropdownMenuCheckboxItem
                  checked={selectedTopics.includes(topic.id)}
                  key={topic.id}
                  onClick={(ev) => {
                    ev.stopPropagation();
                    ev.preventDefault();
                    setSelectedTopics((prev) => {
                      if (prev.includes(topic.id)) {
                        return prev.filter((id) => id !== topic.id);
                      }
                      return [...prev, topic.id];
                    });
                  }}>
                  {topic.name}
                </DropdownMenuCheckboxItem>
              );
            })}
            <DropdownMenuLabel>Statuses</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {statuses.map((status) => {
              return (
                <DropdownMenuCheckboxItem
                  checked={selectedStatuses.includes(status.id)}
                  key={status.id}
                  onClick={(ev) => {
                    ev.stopPropagation();
                    ev.preventDefault();
                    setSelectedStatuses((prev) => {
                      if (prev.includes(status.id)) {
                        return prev.filter((id) => id !== status.id);
                      }
                      return [...prev, status.id];
                    });
                  }}>
                  {status.name}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Select value={selectedOrder} onValueChange={(ev) => setSelectedOrder(ev as IIdeasOrdering)}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {IdeasOrderingOptions.map((order) => {
              return (
                <SelectItem key={order} value={order}>
                  {order}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
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
