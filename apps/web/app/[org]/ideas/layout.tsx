import Ideas from "app/[org]/ideas/default_page";
import Navbar from "app/[org]/navbar";
import protectRoute from "app/utils/protectedRoute";
import { WorkspaceProvider } from "context/workspaceContext";
import React from "react";
import { Suspense } from "react";

export default async function RootLayout({
  children,
  params: { org },
}: Readonly<{
  children: React.ReactNode;
  params: {
    org: string;
  };
}>) {
  const ideas = await Ideas({ org });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {ideas}
      {children}
    </Suspense>
  );
}
