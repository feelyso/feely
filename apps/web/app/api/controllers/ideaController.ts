import { Prisma } from "@prisma/client";
import client, { FeelyRequest } from "app/api/apiClient";
import { ICreateIdea, IVoteIdea } from "app/api/apiServerActions/ideaApiServerActions";
import { Endpoints } from "app/api/endpoints";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useGetIdeasByWorkspaceName = ({ workspaceName }: { workspaceName: string }) => {
  const request: FeelyRequest = {
    url: `${Endpoints.idea.getIdeasByWorkspaceName}?workspaceName=${workspaceName}`,
    config: {
      method: "get",
    },
  };

  const requestConfig = {
    queryKey: [Endpoints.idea.getIdeasByWorkspaceName, workspaceName],
    queryFn: () => client(request),
    staleTime: 60 * 1000,
  };

  return useQuery<
    {
      data: {
        message: string;
        ideas: (Prisma.ideaGetPayload<{
          include: {
            author: true;
            status: true;
            topic: true;
          };
        }> & {
          isVoted: boolean;
        })[];
      };
    },
    null
  >(requestConfig);
};

export const useCreateIdea = () => {
  const queryClient = useQueryClient();
  const createIdeaFunction = async (createIdea: ICreateIdea) => {
    const req: FeelyRequest = {
      url: Endpoints.idea.createIdea,
      config: {
        method: "POST",
        data: JSON.stringify({ data: createIdea }),
      },
    };
    return await client(req);
  };

  return useMutation<{ data: { message: string; id?: string; name?: string } }, null, ICreateIdea>(
    createIdeaFunction,
    {
      onSettled: () => {
        queryClient.invalidateQueries([Endpoints.idea.getIdeasByWorkspaceName]);
      },
    }
  );
};

export const useGetIdeaById = ({ id }: { id: string }) => {
  const params = new URLSearchParams({ id });
  const request: FeelyRequest = {
    url: `${Endpoints.idea.main}?${params.toString()}`,
    config: {
      method: "get",
    },
  };

  const requestConfig = {
    queryKey: [Endpoints.idea.main, id],
    queryFn: () => client(request),
    staleTime: 60 * 1000,
  };

  return useQuery<
    {
      data: {
        message: string;
        idea: Prisma.ideaGetPayload<{
          include: {
            author: true;
            status: true;
            topic: true;
            voters: true;
            comments: {
              include: {
                childComments: true;
                votes: true;
                author: true;
              };
              select: {
                id: true;
                childComments: true;
                votes: true;
                text: true;
                author: true;
                created_at: true;
              };
            };
          };
        }> & {
          isVoted: boolean;
        };
      };
    },
    null
  >(requestConfig);
};

export const useVoteIdea = () => {
  const queryClient = useQueryClient();
  const voteIdeaFunction = async (voteIdea: IVoteIdea) => {
    const req: FeelyRequest = {
      url: Endpoints.idea.vote,
      config: {
        method: "POST",
        data: JSON.stringify({ data: voteIdea }),
      },
    };
    return await client(req);
  };

  return useMutation<{ data: { message: string } }, null, IVoteIdea>(voteIdeaFunction, {
    onSettled: (_a, _b, variables) => {
      queryClient.invalidateQueries([Endpoints.idea.getIdeasByWorkspaceName]);
      queryClient.invalidateQueries([Endpoints.idea.main, variables.id]);
    },
  });
};
