"use server";

import { createClient } from "@utils/supabase/server";
import { IAccessToken } from "app/api/apiClient";
import { getWorkspaceByName } from "app/api/apiServerActions/workspaceApiServerActions";
import { IGetIdeasByWorkspaceName } from "app/types/DTO/getIdeasByWorkspaceNameDTO";
import prisma from "prisma/client";

export interface ICreateIdea {
  org: string;
  title: string;
  description: string;
  topicId: string;
}

export const createIdea = async (body: ICreateIdea, access_token?: string) => {
  const { org } = body;
  const workspace = await getWorkspaceByName(org);
  if (!workspace) {
    return {
      isSuccess: false,
      error: "Workspace do not exist",
    };
  }
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

export const getIdeasByWorkspaceName = async ({
  workspaceName,
  orderBy,
  statusId,
  title,
  topicId,
  access_token,
}: IGetIdeasByWorkspaceName & IAccessToken) => {
  const workspace = await getWorkspaceByName(workspaceName);
  if (!workspace) {
    return {
      isSuccess: false,
      error: "Workspace do not exist",
    };
  }
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
      title: {
        contains: title,
      },
      topicId: {
        in: topicId,
      },
      statusId: {
        in: statusId,
      },
    },
    include: {
      author: true,
      status: true,
      topic: true,
      voters: true,
    },
    take: 50,
  });
  if (!ideas) {
    return {
      isSuccess: false,
    };
  } else {
    const ideasWithVoted = ideas.map((idea) => {
      const isVoted = idea.voters.find((voter) => voter.userId === user.id);
      const { voters, ...ideaWithoutVoters } = idea;
      return {
        ...ideaWithoutVoters,
        isVoted: !!isVoted,
      };
    });
    return {
      isSuccess: true,
      data: ideasWithVoted,
    };
  }
};

export const getIdeaById = async ({ ideaId, access_token }: { ideaId: string; access_token: string }) => {
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
  });
  if (!user) {
    return {
      isSuccess: false,
      error: "User not found",
    };
  }
  const idea = await prisma.idea.findUnique({
    where: {
      id: ideaId,
    },
    include: {
      author: true,
      status: true,
      topic: true,
      voters: true,
      comments: {
        include: {
          author: true,
          childComments: {
            include: {
              author: true,
              votes: true,
            },
          },
          votes: true,
        },
        where: {
          parentId: null,
        },
      },
    },
  });
  if (!idea) {
    return {
      isSuccess: false,
    };
  } else {
    const isVoted = idea.voters.find((voter) => voter.userId === user.id);
    //Check if comments are upvoted
    idea.comments = idea.comments.map((comment) => {
      const isVoted = comment.votes.find((vote) => vote.userId === user.id);
      return { ...comment, isVoted: !!isVoted };
    });
    return {
      isSuccess: true,
      data: {
        ...idea,
        isVoted: !!isVoted,
      },
    };
  }
};

export interface IVoteIdea {
  id: string;
  isVoted: boolean;
}

export const voteIdea = async (body: IVoteIdea, access_token?: string) => {
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
  });
  if (!user) {
    return {
      isSuccess: false,
      error: "User not found",
    };
  }

  if (!body.isVoted) {
    await prisma.votedIdea.delete({
      where: {
        ideaId_userId: {
          userId: user.id,
          ideaId: body.id,
        },
      },
    });
  } else {
    await prisma.votedIdea.create({
      data: {
        userId: user.id,
        ideaId: body.id,
      },
    });
  }
  return {
    isSuccess: true,
  };
};
