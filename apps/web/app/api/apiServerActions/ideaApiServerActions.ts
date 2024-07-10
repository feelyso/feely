"use server";

import { createClient } from "@utils/supabase/server";
import { getWorkspaceByName } from "app/api/apiServerActions/workspaceApiServerActions";
import { revalidatePath } from "next/cache";
import prisma from "prisma/client";

interface ICreateIdea {
  org: string;
  title: string;
  description: string;
  topicId: string;
}

export const createIdea = async (body: ICreateIdea) => {
  console.log("Body", body);
  const { org } = body;
  const workspace = await getWorkspaceByName(org);
  if (!workspace) {
    return {
      isSuccess: false,
      error: "Workspace do not exist",
    };
  }
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

  const status = await prisma.status.findFirst({
    where: {
      workspaceId: workspace.id,
      order: 0,
    },
  });

  if (!status) {
    return {
      isSuccess: false,
      error: "Couldn't find the default status for the workspace",
    };
  }

  const idea = await prisma.idea.create({
    data: {
      title: body.title,
      description: body.description,
      workspaceId: workspace.id,
      topicId: body.topicId,
      authorId: user.id,
      statusId: status.id,
    },
  });
  if (!idea) {
    return {
      isSuccess: false,
    };
  } else {
    return {
      isSuccess: true,
      data: idea.id,
    };
  }
};

export const getIdeasByWorkspaceName = async ({ workspaceName }: { workspaceName: string }) => {
  const workspace = await getWorkspaceByName(workspaceName);
  if (!workspace) {
    return {
      isSuccess: false,
      error: "Workspace do not exist",
    };
  }
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
  const ideas = await prisma.idea.findMany({
    where: {
      workspaceId: workspace.id,
    },
  });
  if (!ideas) {
    return {
      isSuccess: false,
    };
  } else {
    return {
      isSuccess: true,
      data: ideas,
    };
  }
};