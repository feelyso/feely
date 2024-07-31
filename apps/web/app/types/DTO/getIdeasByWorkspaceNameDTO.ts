export const IdeasOrderingOptions = ["Latest", "Oldest", "Most voted", "Least voted"] as const;

export type IIdeasOrdering = (typeof IdeasOrderingOptions)[number];
export interface IGetIdeasByWorkspaceName {
  workspaceName: string;
  title?: string;
  statusId?: string[];
  topicId?: string[];
  orderBy?: IIdeasOrdering;
}
