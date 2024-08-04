"use server";

import { IAccessToken } from "@app/api/apiClient";
import { redirect } from "next/navigation";
import prisma from "prisma/client";
import { createClient } from "utils/supabase/server";

export const logoutUser = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error logging out:", error.message);
  }
  redirect("/");
};

interface IGetUserDTO {
  check_option?: "id" | "name";
  current_org?: string;
}

export const getUser = async ({
  check_option = "name",
  current_org,
  access_token,
}: IGetUserDTO & IAccessToken) => {
  const supabase = createClient();
  const currentUser = await supabase.auth.getUser(access_token);
  if (!currentUser.data.user) {
    return {
      isSuccess: false,
      error: "Session not found",
    };
  }
  const user = await prisma.users.findFirst({
    where: {
      id: currentUser.data.user.id,
    },
    select: {
      id: true,
      email: true,
      image_url: true,
      name: true,
    },
  });
  if (!user) {
    return {
      isSuccess: false,
      error: "User not found",
    };
  }
  let isAdmin = false;
  if (current_org) {
    const userWorkspace = await prisma.workspace.findFirst({
      where: {
        name: check_option === "name" ? current_org : undefined,
        id: check_option === "id" ? current_org : undefined,
        ownerId: user.id,
      },
    });
    if (userWorkspace) {
      isAdmin = userWorkspace.ownerId === user.id;
    }
  }
  return {
    isSuccess: true,
    data: {
      user,
      isAdmin,
    },
  };
};

export const isAdmin = async (body: IGetUserDTO & IAccessToken) => {
  const user = await getUser(body);
  if (!user.data?.isAdmin) {
    return {
      isSuccess: false,
      error: "User is not an admin",
    };
  }
  return {
    isSuccess: true,
  };
};
