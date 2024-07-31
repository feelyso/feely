import Loading from "@app/[org]/loading";
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
