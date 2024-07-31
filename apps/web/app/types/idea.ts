import { Prisma } from "@prisma/client";
import { CommentType } from "app/types/comment";

export type IIdeaSelectionObject = {
  include: {
    author: true;
    status: true;
    topic: true;
    voters: true;
  };
};

export type IdeaType = Prisma.ideaGetPayload<IIdeaSelectionObject> & {
  isVoted: boolean;
  comments: CommentType[];
};
