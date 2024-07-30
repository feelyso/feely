"use server";

import { createClient } from "@utils/supabase/server";
import prisma from "prisma/client";

interface IGetStatusesByWorkspaceName {
  workspaceName: string;
}

export const getStatusesByWorkspaceName = async ({ workspaceName }: IGetStatusesByWorkspaceName) => {
  const supabase = createClient();
  const currentUser = await supabase.auth.getUser();
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
  });
  if (!user) {
    return {
      isSuccess: false,
      error: "User not found",
    };
  }
  const statuses = await prisma.status.findMany({
    where: {
      workspace: {
        name: workspaceName,
      },
    },
  });
  return {
    isSuccess: true,
    data: statuses,
  };
};
