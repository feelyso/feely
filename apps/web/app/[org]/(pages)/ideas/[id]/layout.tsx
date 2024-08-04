import Loading from "@app/[org]/loading";
import { getTopicsByWorkspaceName } from "@app/api/apiServerActions/topicApiServerActions";
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
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
