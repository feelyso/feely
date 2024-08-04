"use server";

import { getUser } from "@app/api/apiServerActions/userApiServerActions";
import { authenticateUser } from "app/api/apiUtils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await authenticateUser(req);
  if (!user) {
    return NextResponse.json({ message: "Unauthorized user" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);

  const res = await getUser(searchParams.get("org") ?? undefined, user.accessToken);

  if (res.isSuccess) {
    return NextResponse.json(
      { message: "User retrieved", user: res.data?.user, isAdmin: res.data?.isAdmin },
      { status: 200 }
    );
  }
  return NextResponse.json({ message: res.error }, { status: 400 });
}
