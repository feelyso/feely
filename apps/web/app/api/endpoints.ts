export const Endpoints = {
  workspace: {
    checkExistance: "/api/workspace/checkExistance",
    createWorkspace: "/api/workspace/createWorkspace",
  },
  idea: {
    main: "/api/idea",
    vote: "api/idea/vote",
    createIdea: "/api/idea/createIdea",
    getIdeasByWorkspaceName: "/api/idea/ideasByWorkspaceName",
  },
  comment: {
    main: "/api/comment",
    vote: "/api/comment/vote",
    reply: "/api/comment/reply",
  },
  user: {
    main: "/api/user",
  },
};
