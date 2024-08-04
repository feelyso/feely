"use client";

import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader } from "@feely/ui/components/sheet";
import { usePathname, useRouter } from "next/navigation";
import { useGetIdeaById, usePatchIdea, useVoteIdea } from "app/api/controllers/ideaController";
import { Input } from "@feely/ui/components/input";
import { Button } from "@feely/ui/components/button";
import { useCreateComment } from "app/api/controllers/commentController";
import { Loader } from "@feely/ui/components/icon";
import { IconArrowUp } from "@tabler/icons-react";
import CommentCard from "app/[org]/(pages)/ideas/[id]/components/comment";
import { useAuth } from "@context/authContext";
import { Avatar, AvatarImage } from "@feely/ui/components/avatar";
import { SelectTrigger, SelectValue, SelectContent, SelectItem, Select } from "@feely/ui/components/select";
import { TopicType } from "@app/types/topic";
import { useWorkspace } from "@context/workspaceContext";
import { getStatusesByWorkspaceName } from "@app/api/apiServerActions/statusApiServerAction";

interface IProps {
  params: {
    org: string;
    id: string;
  };
}

const IdeaPage = (props: IProps) => {
  const {
    params: { id },
  } = props;
  const router = useRouter();
  const pathName = usePathname();
  const handleClose = () => {
    router.push(pathName.substring(0, pathName.lastIndexOf("/")));
  };
  const { data: ideaData, isLoading: isLoadingGetIdea } = useGetIdeaById({ id });
  const idea = ideaData?.data.idea;

  const [comment, setComment] = useState<string>("");

  const { mutateAsync: createComment, isLoading: isLoadingCreateComment } = useCreateComment();

  const { isAdmin } = useAuth();

  const { org } = useWorkspace();

  const handleComment = async () => {
    try {
      await createComment({
        ideaId: id,
        comment,
      });
      setComment("");
    } catch (e) {}
  };

  const { mutate: voteIdea } = useVoteIdea();

  const handleVoteIdea = (isVoted: boolean) => {
    voteIdea({ id, isVoted: !isVoted });
  };

  const [status, setStatus] = useState<TopicType[]>([]);

  useEffect(() => {
    //This is probably bad, a handler should be used
    const getStatuses = async () => {
      const res = await getStatusesByWorkspaceName({ workspaceName: org });
      const data = res.data;
      if (!data) return console.error("No statuses found");
      setStatus(data);
    };
    getStatuses();
  }, []);

  const { mutate: patchIdea, isLoading: isLoadingPatchIdea } = usePatchIdea();

  const handleChangeStatus = (statusId: string) => {
    if (!idea) return;
    patchIdea({
      ideaId: idea?.id,
      statusId: statusId,
    });
  };

  return (
    <div>
      <Sheet
        open={true}
        onOpenChange={(open: boolean) => {
          if (!open) {
            handleClose();
          }
        }}>
        {isLoadingGetIdea ? (
          <Loader />
        ) : idea ? (
          <SheetContent
            style={{ width: "40%", maxWidth: "40%", display: "flex", flexDirection: "column", gap: 12 }}>
            <SheetHeader>{idea?.title}</SheetHeader>
            <SheetDescription>{idea?.description}</SheetDescription>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="w-[100px] text-slate-400">Author</span>
                <span>{idea.author.name}</span>
              </div>
              <div className="flex gap-2">
                <span className="w-[100px] text-slate-400">Status</span>
                {isAdmin ? (
                  <Select defaultValue={idea.statusId} onValueChange={(ev) => handleChangeStatus(ev)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chose one topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {status?.map((topic) => {
                        return <SelectItem value={topic.id}>{topic.name}</SelectItem>;
                      })}
                    </SelectContent>
                  </Select>
                ) : (
                  <span>{idea.status.name}</span>
                )}
              </div>
              <div className="flex gap-2">
                <span className="w-[100px] text-slate-400">Topic</span>
                <span>{idea.topic.name}</span>
              </div>
              <div className="flex gap-2">
                <span className="w-[100px] text-slate-400">Created</span>
                <span>{new Date(idea.created_at).toLocaleString()}</span>
              </div>
              <div className="flex gap-2">
                <span className="w-[100px] text-slate-400">Voters</span>
                <span>
                  {idea.voters.length} -{" "}
                  {idea.voters.map((voter) => (
                    <Avatar>
                      <AvatarImage
                        src={voter.user.image_url ?? undefined}
                        alt={voter.user.name ?? undefined}
                      />
                    </Avatar>
                  ))}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Button
                className={idea.isVoted ? "" : "border-2 border-white bg-transparent"}
                onClick={(ev) => {
                  ev.stopPropagation();
                  ev.preventDefault();
                  handleVoteIdea(idea.isVoted);
                }}>
                <IconArrowUp />
              </Button>
              <Input
                placeholder={`Reply to ${idea.author.name}`}
                value={comment}
                onChange={(ev) => setComment(ev.target.value)}
                className="w-full"
              />
              <Button
                disabled={!comment}
                onClick={() => {
                  if (!isLoadingCreateComment) handleComment();
                }}
                className="w-fit">
                {isLoadingCreateComment ? <Loader /> : "Comment"}
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-slate-400">Replies</span>
              {idea.comments?.map((comment) => {
                return <CommentCard key={comment.id} comment={comment} />;
              })}
            </div>
          </SheetContent>
        ) : (
          <SheetContent style={{ width: "40%", maxWidth: "40%" }}>
            <SheetHeader>Idea Not Found</SheetHeader>
          </SheetContent>
        )}
      </Sheet>
    </div>
  );
};

export default IdeaPage;
