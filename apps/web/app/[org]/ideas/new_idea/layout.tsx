import Loading from "@app/[org]/loading";
import { Suspense } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
