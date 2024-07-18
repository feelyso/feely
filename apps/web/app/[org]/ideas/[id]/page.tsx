"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@feely/ui/components/sheet";
import { usePathname, useRouter } from "next/navigation";
import NewIdeaForm from "app/[org]/ideas/new_idea/new_idea_form";
import { IPropsDynamicRoute } from "app/[org]/page";
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
  return (
    <div>
      <Sheet
        open={true}
        onOpenChange={(open: boolean) => {
          if (!open) {
            handleClose();
          }
        }}>
        <SheetContent>
          <SheetHeader>Tell us your idea</SheetHeader>
          <SheetDescription>{id}</SheetDescription>
          {/* <NewIdeaForm org={org} /> */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default IdeaPage;
