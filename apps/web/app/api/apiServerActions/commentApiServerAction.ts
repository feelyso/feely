"use server";

import { createClient } from "@utils/supabase/server";
import { ICreateComment } from "app/api/controllers/commentController";
import prisma from "prisma/client";

export const createComment = async (comment: ICreateComment, access_token?: string) => {
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
  const newComment = await prisma.comment.create({
    data: {
      text: comment.comment,
      authorId: user.id,
      ideaId: comment.ideaId,
    },
  });
  if (!newComment) {
    return {
      isSuccess: false,
      error: "Comment not created",
    };
  }
  return {
    isSuccess: true,
    id: newComment.id,
  };
};
