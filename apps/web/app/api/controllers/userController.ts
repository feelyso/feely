import client, { FeelyRequest } from "@app/api/apiClient";
import { Endpoints } from "@app/api/endpoints";
import { IGetUserDTO } from "@app/types/DTO/getUserDTO";
import { useQuery } from "react-query";

export const useGetUser = (params: IGetUserDTO, enabled = true) => {
  const urlParams = new URLSearchParams({
    ...(params.current_org ? { org: params.current_org } : {}),
  });
  const request: FeelyRequest = {
    url: `${Endpoints.user.main}?${urlParams.toString()}`,
    config: {
      method: "get",
    },
  };
  const requestConfig = {
    queryKey: [Endpoints.user.main, urlParams.toString()],
    queryFn: () => client(request),
    staleTime: 60 * 1000,
    enabled,
  };

  return useQuery<
    {
      data: {
        message: string;
        user: any;
        isAdmin: boolean;
      };
    },
    null
  >(requestConfig);
};
