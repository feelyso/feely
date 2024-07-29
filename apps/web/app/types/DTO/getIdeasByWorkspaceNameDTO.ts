export type IIdeasOrdering = "latest" | "oldest" | "most_voted" | "least_voted";
export interface IGetIdeasByWorkspaceName {
  workspaceName: string;
  title?: string;
  statusId?: string[];
  topicId?: string[];
  orderBy?: IIdeasOrdering;
}
