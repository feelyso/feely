import Loading from "@app/[org]/loading";
import Navbar from "@app/[org]/navbar";
import { checkWorkspaceExistanceServer } from "@app/api/apiServerActions/workspaceApiServerActions";
import protectRoute from "@app/utils/protectedRoute";
import { WorkspaceProvider } from "@context/workspaceContext";
import { redirect } from "next/navigation";
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
  const exists = await checkWorkspaceExistanceServer(org);
  if (!exists) {
    redirect("/");
  } else
    return (
      <Suspense fallback={<Loading />}>
        <WorkspaceProvider>
          <Navbar org={org} />
          <div className="bg-subtle mx-auto flex size-full justify-center">
            <div className="size-full max-w-screen-xl px-10 pb-10 pt-24">{children}</div>
          </div>
        </WorkspaceProvider>
      </Suspense>
    );
}
