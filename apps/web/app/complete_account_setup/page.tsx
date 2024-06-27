"use client";
import { Button } from "@feely/ui/components/button";
import { Loader2 } from "@feely/ui/components/icon";
import { createWorkspace } from "app/api/serverApiActions";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CompleteAccountSetup = () => {
  const searchParams = useSearchParams();
  const workspace = searchParams.get("workspace");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  if (!workspace) {
    return <div>Missing workspace parameter</div>;
  }
  const handleCreateWorkspace = async (workspace: string) => {
    try {
      const res = await createWorkspace(workspace);
      console.log("Res", res);
      if (!res.isSuccess) {
        setError(res.error ?? null);
      } else {
        router.push("/dashboard");
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
