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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@feely/ui/components/select";
import { useGetIdeasByWorkspaceName, useVoteIdea } from "app/api/controllers/ideaController";
import { StatusType } from "app/types/status";
import { TopicType } from "app/types/topic";
import useDebounce from "app/utils/useDebounce";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IdeasOrderingOptions, IIdeasOrdering } from "app/types/DTO/getIdeasByWorkspaceNameDTO";
import { Separator } from "@feely/ui/components/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@feely/ui/components/avatar";
import { Tag } from "@feely/ui/components/tag";
import { ChevronUp, HelpCircle } from "@feely/ui/components/icon";
import { Toggle } from "@feely/ui/components/toggle";

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

  const [selectedOrder, setSelectedOrder] = useState<IIdeasOrdering>("Latest");

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
    <div className="flex flex-col space-y-4">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-heading-section">Ideas</h2>
        <Button asChild>
          <Link href={`/${org}/ideas/new_idea`}>New idea</Link>
        </Button>
      </div>
      <Separator />
      <div className="flex items-center justify-between space-x-20">
        <Input
          value={searchTitleFastRefreshing}
          onChange={(ev) => setDebounced(ev.target.value)}
          placeholder="Search ideas..."
          className="max-w-96"
        />
        <div className="flex items-center justify-center space-x-1.5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
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
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort by</SelectLabel>
                {IdeasOrderingOptions.map((order) => {
                  return (
                    <SelectItem key={order} value={order}>
                      {order}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="bg-background border-default flex min-h-64 w-full flex-col space-y-1 rounded-lg border p-1">
        {ideas?.data.ideas.map((idea, index) => {
          const isLastItem = index === ideas.data.ideas.length - 1;
          return (
            <>
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
                      In review
                    </Tag>
                  </div>
                  <p className="text-description text-md line-clamp-1">{idea.description}</p>
                  <div className="pt-2">
                    <p className="text-description text-sm">
                      by <Link href="/">{idea.author.name}</Link>
                    </p>
                  </div>
                </div>
                <Toggle
                  aria-label="vote"
                  variant="outline"
                  className="flex h-14 w-11 flex-col items-center justify-items-center gap-0 space-y-0 p-1"
                  onClick={(ev) => {
                    ev.stopPropagation();
                    handleVoteIdea(idea.id, idea.isVoted);
                  }}>
                  <ChevronUp size={24} />
                  <p className="text-md">27</p>
                </Toggle>
              </div>
              {!isLastItem && <Separator />}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Ideas;
