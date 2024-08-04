"use server";

import { redirect } from "next/navigation";
import prisma from "prisma/client";
import { createClient } from "utils/supabase/server";

export const logoutUser = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error logging out:", error.message);
  }
  redirect("/");
};

export const getUser = async (current_org?: string, access_token?: string) => {
  const supabase = createClient();
  const currentUser = await supabase.auth.getUser(access_token);
  if (!currentUser.data.user) {
    return {
      isSuccess: false,
      error: "Session not found",
    };
  }
  const user = await prisma.users.findFirst({
    where: {
      id: currentUser.data.user.id,
    },
    select: {
      id: true,
      email: true,
      image_url: true,
      name: true,
    },
  });
  if (!user) {
    return {
      isSuccess: false,
      error: "User not found",
    };
  }
  let isAdmin = false;
  if (current_org) {
    const userWorkspace = await prisma.workspace.findFirst({
      where: {
        name: current_org,
        ownerId: user.id,
      },
    });
    if (userWorkspace) {
      isAdmin = userWorkspace.ownerId === user.id;
    }
  }
  return {
    isSuccess: true,
    data: {
      user,
      isAdmin,
    },
  };
};
