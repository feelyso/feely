import { Prisma } from "@prisma/client";
import { CommentType } from "app/types/comment";

export type Idea = Prisma.ideaGetPayload<{
  include: {
    author: true;
    status: true;
    topic: true;
    voters: true;
  };
}> & {
  isVoted: boolean;
  comments: CommentType[];
};
