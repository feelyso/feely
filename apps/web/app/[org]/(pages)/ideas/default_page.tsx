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
import {
  getIdeasOrderingName,
  IdeasOrderingOptions,
  IIdeasOrdering,
} from "app/types/DTO/getIdeasByWorkspaceNameDTO";
import { Separator } from "@feely/ui/components/separator";
import { Loader } from "@feely/ui/components/icon";
import IdeaCard from "@app/[org]/(pages)/ideas/components/idea";
import { useWorkspace } from "@context/workspaceContext";

interface IProps {
  topics: TopicType[];
  statuses: StatusType[];
}

const Ideas = ({ topics, statuses }: IProps) => {
  const { org } = useWorkspace();
  const {
    mainState: mainSearchTitle,
    slaveState: searchTitleFastRefreshing,
    setSlaveState: setDebounced,
  } = useDebounce(1000);

  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const [selectedOrder, setSelectedOrder] = useState<IIdeasOrdering>("latest");

  const { data: ideas, isLoading: isLoadingIdeas } = useGetIdeasByWorkspaceName({
    workspaceName: org,
    title: mainSearchTitle,
    topicId: selectedTopics.length === 0 ? undefined : selectedTopics,
    statusId: selectedStatuses.length === 0 ? undefined : selectedStatuses,
    orderBy: selectedOrder,
  });

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
                      {getIdeasOrderingName(order)}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="bg-background border-default flex min-h-64 w-full flex-col space-y-1 rounded-lg border p-1">
        {isLoadingIdeas ? (
          <Loader />
        ) : (
          ideas?.data.ideas.map((idea, index) => {
            const isLastItem = index === ideas.data.ideas.length - 1;
            return (
              <>
                <IdeaCard idea={idea} org={org} key={index} />
                {!isLastItem && <Separator />}
              </>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Ideas;
