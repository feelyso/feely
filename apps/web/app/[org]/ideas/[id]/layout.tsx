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
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
