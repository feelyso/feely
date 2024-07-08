import Navbar from "app/[org]/navbar";
import protectRoute from "app/utils/protectedRoute";
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
  await protectRoute(`/${org}`);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkspaceProvider>
        <Navbar org={org} />
        {children}
      </WorkspaceProvider>
    </Suspense>
  );
}