import { Endpoints } from "app/api/endpoints";
import { NextRequest, NextResponse } from "next/server";
import prisma from "prisma/client";

// Server example
export const checkWorkspaceExistanceServer = async (workspaceName: string) => {
  const res = await prisma.workspace.findFirst({
    where: {
      name: workspaceName,
    },
  });
  if (res) {
    return true;
  }
  return false;
};

//Usage from client
export async function POST(req: NextRequest) {
  const { workspaceName } = await req.json();

  if (!workspaceName) {
    return NextResponse.json({ message: "Workspace name is required" }, { status: 400 });
  }

  const workspaceExists = await prisma.workspace.findFirst({
    where: {
      name: workspaceName,
    },
  });

  return NextResponse.json({ exists: !!workspaceExists }, { status: 200 });
}

export const checkWorkspaceExistance = async (workspaceName: string) => {
  const response = await fetch(Endpoints.workspace.checkExistance, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ workspaceName }),
  });

  const data = await response.json();
  return data.exists;
};
