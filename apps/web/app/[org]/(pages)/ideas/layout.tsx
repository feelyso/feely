import Loading from "@app/[org]/loading";
import Ideas from "app/[org]/(pages)/ideas/default_page";
import { getStatusesByWorkspaceName } from "app/api/apiServerActions/statusApiServerAction";
import { getTopicsByWorkspaceName } from "app/api/apiServerActions/topicApiServerActions";
import React from "react";
import { Suspense } from "react";

export default async function RootLayout({
  children,
  params: { org },
}: Readonly<{
  children: React.ReactNode;
  params: {
    org: string;
  };
}>) {
  const topics = await getTopicsByWorkspaceName({ workspaceName: org });
  const statuses = await getStatusesByWorkspaceName({ workspaceName: org });

  return (
    <Suspense fallback={<Loading />}>
      <Ideas topics={topics.data ?? []} statuses={statuses.data ?? []} />
      {children}
    </Suspense>
  );
}
