"use client";

import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader } from "@feely/ui/components/sheet";
import { usePathname, useRouter } from "next/navigation";
import { useGetIdeaById } from "app/api/controllers/ideaController";
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
          <SheetContent style={{ width: "40%" }}>
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
            {/* <NewIdeaForm org={org} /> */}
          </SheetContent>
        ) : (
          <SheetContent>
            <SheetHeader>Idea Not Found</SheetHeader>
          </SheetContent>
        )}
      </Sheet>
    </div>
  );
};

export default IdeaPage;
