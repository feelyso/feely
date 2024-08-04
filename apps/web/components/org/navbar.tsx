"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@feely/ui/components/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@feely/ui/components/dropdown-menu";
import { Button } from "@feely/ui/components/button";
import { Separator } from "@feely/ui/components/separator";
import { logoutUser } from "app/api/apiServerActions/userApiServerActions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BookText, HelpCircle, LogOut, Settings, User } from "@feely/ui/components/icon";
import { useAuth } from "@context/authContext";
import { useWorkspace } from "@context/workspaceContext";

const Navbar = () => {
  const { org } = useWorkspace();
  const pathname = usePathname();
  const orgLetter = org[0];
  // Function to check if the route is active
  const isActive = (route: string) => {
    return pathname.split("/")[2] === route;
  };
  const { user } = useAuth();
  return (
    <div className="bg-elevated border-default fixed z-50 flex h-14 w-full items-center justify-center border-b">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-10">
        <div className="flex h-9 items-center justify-center space-x-4">
          <div className="flex h-9 items-center justify-center space-x-2">
            <Avatar size="md" className="border-default border">
              <AvatarImage src={org} alt={org} />
              <AvatarFallback>{orgLetter}</AvatarFallback>
            </Avatar>
            <h1 className="text-heading-body">{org}</h1>
          </div>
          <Separator orientation="vertical" className="h-7" />
          <ul className="flex gap-1.5">
            <Button variant="text" asChild className={isActive("ideas") ? "text-brand" : ""}>
              <Link href={`/${org}/ideas`}>Ideas</Link>
            </Button>
            <Button variant="text" asChild className={isActive("roadmap") ? "text-brand" : ""}>
              <Link href={`/${org}/roadmap`}>Roadmap</Link>
            </Button>
            <Button variant="text" asChild className={isActive("community") ? "text-brand" : ""}>
              <Link href={`/${org}/community`}>Community</Link>
            </Button>
            <Button variant="text" asChild className={isActive("settings") ? "text-brand" : ""}>
              <Link href={`/${org}/settings`}>Settings</Link>
            </Button>
          </ul>
        </div>
        <div className="flex space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar size="lg" className="border-default border hover:cursor-pointer">
                <AvatarImage src={user?.image_url ?? undefined} alt="@kkratterf" />
                <AvatarFallback>{user?.name?.slice(0, 2) ?? "Us"}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="text h-7 pb-0">{user?.name}</DropdownMenuLabel>
              <DropdownMenuLabel className="text-md h-7 pt-0">{user?.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <HelpCircle />
                  <span>Help</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BookText />
                  <span>Docs</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  await logoutUser();
                }}>
                <LogOut />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
