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
import NewIdeaForm from "@app/[org]/(pages)/ideas/new_idea/new_idea_form";
import { IPropsDynamicRoute } from "app/[org]/page";
import { Separator } from "@feely/ui/components/separator";

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
          if (!open) {
            handleClose();
          }
        }}>
        <SheetContent className="flex min-w-[476px] flex-col space-y-4 p-10">
          <div className="flex flex-col space-y-1">
            <h2 className="text-heading-body">Tell us your idea</h2>
            <p className="text-md text-description">Lorem ipsum dolor sit amet cum condipiscitur</p>
          </div>
          <Separator />
          <NewIdeaForm org={org} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NewIdea;
