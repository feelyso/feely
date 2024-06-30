"use server";

import { redirect } from "next/navigation";
import prisma from "prisma/client";
import { createClient } from "utils/supabase/server";

interface IGetTopics {
  workspaceId: string;
}

export const getTopics = async ({ workspaceId }: IGetTopics) => {
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
  const topics = await prisma.topic.findMany({
    where: {
      workspaceId,
    },
  });

  return {
    isSuccess: true,
    data: topics,
  };
};

interface IGetTopicsByWorkspaceName {
  workspaceName: string;
}

export const getTopicsByWorkspaceName = async ({ workspaceName }: IGetTopicsByWorkspaceName) => {
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
  const topics = await prisma.topic.findMany({
    where: {
      workspace: {
        name: workspaceName,
      },
    },
  });
  return {
    isSuccess: true,
    data: topics,
  };
};
