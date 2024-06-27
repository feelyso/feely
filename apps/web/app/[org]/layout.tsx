import Navbar from "app/[org]/navbar";
import { WorkspaceProvider } from "context/workspaceContext";
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
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkspaceProvider>
        <Navbar org={org} />
        {children}
      </WorkspaceProvider>
    </Suspense>
  );
}
