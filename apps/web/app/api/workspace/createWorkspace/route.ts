"use server";

import { createWorkspace } from "app/api/apiServerActions/workspaceApiServerActions";
import { authenticateUser } from "app/api/apiUtils";
import { NextRequest, NextResponse } from "next/server";

//Usage from client
export async function POST(req: NextRequest) {
  const user = await authenticateUser(req);
  if (!user) {
    return NextResponse.json({ message: "Unauthorized user" }, { status: 401 });
  }
  const body = await req.json();
  const { workspaceName } = body;
  console.log("User", user);
  const res = await createWorkspace(workspaceName, user.accessToken);

  console.log("Res", res);
  if (res.isSuccess) {
    return NextResponse.json(
      { message: "Workspace created", id: res.id, name: workspaceName },
      { status: 200 }
    );
  }
  return NextResponse.json({ message: res.error }, { status: 400 });

  // console.log("Data", data);
  // if (!workspaceName) {
  //   return NextResponse.json({ message: "Workspace name is required" }, { status: 400 });
  // }

  // return NextResponse.json({ exists: false }, { status: 200 });
}
