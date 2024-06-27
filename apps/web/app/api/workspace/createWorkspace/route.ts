"use server";

import { NextRequest, NextResponse } from "next/server";
import prisma from "prisma/client";
import { createClient } from "utils/supabase/server";
// import { verify } from "jsonwebtoken";

//Usage from client
export async function POST(req: NextRequest) {
  // const cookieValue = req.cookies.get(COOKIES.SUPABASE_AUTH_TOKEN_0)?.value as any;
  // const { access_token } = cookieValue;

  // const { data } = await supabase.auth.getSession();
  // console.log("Data", data, cookieValue);
  const supabase = createClient();
  const body = await req.json();
  const { workspaceName } = body;
  const accessToken = req.headers.get("Authorization");
  const refreshToken = req.headers.get("RefreshToken");
  if (!accessToken || !refreshToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { data: authSession } = await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });
  console.log("AuthSession", authSession);
  const { data, error } = await supabase.auth.getUser(accessToken ?? undefined);
  // console.log("Error", error);
  if (error) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  // console.log("Data", data);
  if (!workspaceName) {
    return NextResponse.json({ message: "Workspace name is required" }, { status: 400 });
  }

  //   const workspaceExists = await prisma.workspace.findFirst({
  //     where: {
  //       name: workspaceName,
  //     },
  //   });

  return NextResponse.json({ exists: false }, { status: 200 });
}
