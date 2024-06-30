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
import { Button } from "@feely/ui/components/button";
import { FormField } from "@feely/ui/components/form";
import NewIdeaForm from "app/[org]/ideas/new_idea/new_idea_form";
import { IPropsDynamicRoute } from "app/[org]/page";

const NewIdea = async ({ params: { org } }: IPropsDynamicRoute) => {
  const router = useRouter();
  const pathName = usePathname();
  const handleClose = () => {
    router.push(pathName.split("/new_idea")[0]);
  };
  return (
    <div>
      <Sheet
        open={true}
        onOpenChange={(open: boolean) => {
          console.log("Open", open);
          if (!open) {
            handleClose();
          }
        }}>
        <SheetContent>
          <SheetHeader>Tell us your idea</SheetHeader>
          <SheetDescription>Lorem ipsum dolor sit amet cum condipiscitur</SheetDescription>
          <NewIdeaForm org={org} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NewIdea;
