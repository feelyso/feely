import { idea } from "@prisma/client";
import client, { FeelyRequest } from "app/api/apiClient";
import { ICreateIdea } from "app/api/apiServerActions/ideaApiServerActions";
import { Endpoints } from "app/api/endpoints";
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";

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

  return useQuery<{ data: { message: string; ideas: idea[] } }, null>(requestConfig);
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
