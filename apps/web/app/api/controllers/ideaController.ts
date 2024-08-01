import { Prisma } from "@prisma/client";
import client, { FeelyRequest } from "app/api/apiClient";
import { ICreateIdea, IVoteIdea } from "app/api/apiServerActions/ideaApiServerActions";
import { Endpoints } from "app/api/endpoints";
import { IGetIdeasByWorkspaceName } from "app/types/DTO/getIdeasByWorkspaceNameDTO";
import { IdeaType, IdeaWithCommentsType } from "app/types/idea";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useGetIdeasByWorkspaceName = (params: IGetIdeasByWorkspaceName, enabled = true) => {
  const urlParams = new URLSearchParams({
    workspaceName: params.workspaceName,
    ...(params.title ? { title: params.title } : {}),
    ...(params.statusId ? { statusId: params.statusId.sort().join(",") } : {}),
    ...(params.topicId ? { topicId: params.topicId.sort().join(",") } : {}),
    ...(params.orderBy ? { orderBy: params.orderBy } : {}),
  });
  const request: FeelyRequest = {
    url: `${Endpoints.idea.getIdeasByWorkspaceName}?${urlParams.toString()}`,
    config: {
      method: "get",
    },
  };
  const requestConfig = {
    queryKey: [Endpoints.idea.getIdeasByWorkspaceName, urlParams.toString()],
    queryFn: () => client(request),
    staleTime: 60 * 1000,
    enabled,
  };

  return useQuery<
    {
      data: {
        message: string;
        ideas: IdeaType[];
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
    staleTime: 5 * 1000,
  };

  return useQuery<
    {
      data: {
        message: string;
        idea: IdeaWithCommentsType;
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
