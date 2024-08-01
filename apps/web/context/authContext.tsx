"use client";
import { Session } from "@supabase/supabase-js";
import { createClient } from "@utils/supabase/client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IAuthContext {
  isAdmin: boolean;
  session: Session;
}

// Create the AuthContext with default values
const AuthContext = createContext<IAuthContext | undefined>(undefined);

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children, session }: { children: ReactNode; session: Session }) => {
  const isAdmin = !!session.user.role;
  return <AuthContext.Provider value={{ isAdmin, session }}>{children}</AuthContext.Provider>;
};

// Custom hook for using the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
