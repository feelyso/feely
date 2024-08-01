import { Suspense } from "react";
import { redirect } from "next/navigation";
import Loading from "@app/[org]/loading";
import Navbar from "@components/org/navbar";
import { checkWorkspaceExistanceServer } from "@app/api/apiServerActions/workspaceApiServerActions";
import protectRoute from "@app/utils/protectedRoute";
import { WorkspaceProvider } from "@context/workspaceContext";

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
          <div className="bg-subtle mx-auto flex size-full min-h-screen justify-center">
            <div className="size-full max-w-screen-xl px-10 pb-10 pt-24">{children}</div>
          </div>
        </WorkspaceProvider>
      </Suspense>
    );
}
