"use client";
import { Button } from "@feely/ui/components/button";
import { Loader2 } from "@feely/ui/components/icon";
import { useCreateWorkspace } from "app/api/controllers/workspaceController";
// import { createWorkspace } from "app/api/apiServerActions/workspaceApiServerActions";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CompleteAccountSetup = () => {
  const searchParams = useSearchParams();
  const workspace = searchParams.get("workspace");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const { mutateAsync: createWorkspaceFunction } = useCreateWorkspace();
  if (!workspace) {
    return <div>Missing workspace parameter</div>;
  }

  const handleCreateWorkspace = async (workspace: string) => {
    try {
      const res = await createWorkspaceFunction(workspace);
      console.log("Res", res);
      if (!res.data.name) {
        setError(res.data.message ?? null);
      } else {
        router.push(`/${res.data.name}`);
      }
    } catch (e: any) {
      console.log("Error", e);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {error && <div>{error}</div>}
      <Button onClick={() => handleCreateWorkspace(workspace)}>Click here to complete the setup</Button>
      <Loader2 />
    </div>
  );
};

export default CompleteAccountSetup;
