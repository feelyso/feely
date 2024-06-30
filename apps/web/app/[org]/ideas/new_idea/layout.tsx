import Navbar from "app/[org]/navbar";
import protectRoute from "app/utils/protectedRoute";
import { WorkspaceProvider } from "context/workspaceContext";
import { Suspense } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
