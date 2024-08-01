"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IWorkspaceContext {
  org: string;
}

// Create the AuthContext with default values
const WorkspaceContext = createContext<IWorkspaceContext | undefined>(undefined);

WorkspaceContext.displayName = "WorkspaceContext";

export const WorkspaceProvider = ({ children, org: initialOrg }: { children: ReactNode; org: string }) => {
  const [org, setOrg] = useState<string>(initialOrg);

  return <WorkspaceContext.Provider value={{ org }}>{children}</WorkspaceContext.Provider>;
};

// Custom hook for using the WorkspaceContext
export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }
  return context;
};
