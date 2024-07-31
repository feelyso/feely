"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IWorkspaceContext {
  name: string | null;
}

// Create the AuthContext with default values
const WorkspaceContext = createContext<IWorkspaceContext | undefined>(undefined);

WorkspaceContext.displayName = "WorkspaceContext";

export const WorkspaceProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string | null>(null);

  return <WorkspaceContext.Provider value={{ name }}>{children}</WorkspaceContext.Provider>;
};

// Custom hook for using the WorkspaceContext
export const useWorkspace = () => useContext(WorkspaceContext);
