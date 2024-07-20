"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader } from "@feely/ui/components/sheet";
import { usePathname, useRouter } from "next/navigation";
import { useGetIdeaById } from "app/api/controllers/ideaController";
import { Input } from "@feely/ui/components/input";
import { Button } from "@feely/ui/components/button";
import { useCreateComment } from "app/api/controllers/commentController";
import { Loader } from "@feely/ui/components/icon";
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
  const { data: ideaData } = useGetIdeaById({ id });
  const idea = ideaData?.data.idea;

  const [comment, setComment] = useState<string>("");

  const { mutateAsync: createComment, isLoading: isLoadingCreateComment } = useCreateComment();

  const handleComment = async () => {
    try {
      await createComment({
        ideaId: id,
        comment,
      });
      setComment("");
    } catch (e) {}
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
        {idea ? (
          <SheetContent style={{ width: "40%", display: "flex", flexDirection: "column", gap: 12 }}>
            <SheetHeader>{idea?.title}</SheetHeader>
            <SheetDescription>{idea?.description}</SheetDescription>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="w-[100px] text-slate-400">Author</span>
                <span>{idea.author.name}</span>
              </div>
              <div className="flex gap-2">
                <span className="w-[100px] text-slate-400">Status</span>
                <span>{idea.status.name}</span>
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
                <span>{idea.voters.length}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
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
                return (
                  <div key={comment.id} className="flex flex-col">
                    <div className="flex w-full justify-between">
                      <span>{comment.author.name}</span>
                      <span>{new Date(comment.created_at).toLocaleString()}</span>
                    </div>
                    <span>{comment.text}</span>
                  </div>
                );
              })}
            </div>
            {/* <NewIdeaForm org={org} /> */}
          </SheetContent>
        ) : (
          <SheetContent style={{ width: "40%" }}>
            <SheetHeader>Idea Not Found</SheetHeader>
          </SheetContent>
        )}
      </Sheet>
    </div>
  );
};

export default IdeaPage;
