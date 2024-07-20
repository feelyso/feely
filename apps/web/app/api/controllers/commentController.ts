import client, { FeelyRequest } from "app/api/apiClient";
import { Endpoints } from "app/api/endpoints";
import { useMutation, useQueryClient } from "react-query";

export interface ICreateComment {
  ideaId: string;
  comment: string;
}

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  const createCommentFunction = async (createComment: ICreateComment) => {
    const req: FeelyRequest = {
      url: Endpoints.comment.main,
      config: {
        method: "POST",
        data: JSON.stringify({ data: createComment }),
      },
    };
    return await client(req);
  };

  return useMutation<{ data: { message: string; id?: string } }, null, ICreateComment>(
    createCommentFunction,
    {
      onSettled: () => {
        queryClient.invalidateQueries([Endpoints.idea.main]);
      },
    }
  );
};
