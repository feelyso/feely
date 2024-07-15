"use server";

import { getIdeasByWorkspaceName } from "app/api/apiServerActions/ideaApiServerActions";
import { authenticateUser } from "app/api/apiUtils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await authenticateUser(req);
  if (!user) {
    return NextResponse.json({ message: "Unauthorized user" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const workspaceName = searchParams.get("workspaceName");
  if (!workspaceName) {
    return NextResponse.json({ message: "Workspace name is required" }, { status: 400 });
  }
  const res = await getIdeasByWorkspaceName({ workspaceName: workspaceName, access_token: user.accessToken });

  if (res.isSuccess) {
    return NextResponse.json({ message: "Ideas retrieved", ideas: res.data }, { status: 200 });
  }
  return NextResponse.json({ message: res.error }, { status: 400 });
}
