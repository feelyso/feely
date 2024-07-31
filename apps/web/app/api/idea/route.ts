"use server";

import { getIdeaById } from "app/api/apiServerActions/ideaApiServerActions";
import { authenticateUser } from "app/api/apiUtils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await authenticateUser(req);
  if (!user) {
    return NextResponse.json({ message: "Unauthorized user" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "Idea id is required" }, { status: 400 });
  }
  const res = await getIdeaById({ ideaId: id, access_token: user.accessToken });

  if (res.isSuccess) {
    return NextResponse.json({ message: "Idea retrieved", idea: res.data }, { status: 200 });
  }
  return NextResponse.json({ message: res.error }, { status: 400 });
}
