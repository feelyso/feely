import { getWorkspaceByUser } from "app/api/apiServerActions/workspaceApiServerAcrions";
import protectRoute from "app/utils/protectedRoute";
import { redirect } from "next/navigation";

const RedirectToWorkspace = async () => {
  await protectRoute("/redirect_to_workspace");

  const currentWorkspace = await getWorkspaceByUser();

  if (!currentWorkspace.isSuccess) {
    return redirect("/signup");
  }
  return redirect(`/${currentWorkspace.workspace?.name}/ideas`);
};

export default RedirectToWorkspace;
