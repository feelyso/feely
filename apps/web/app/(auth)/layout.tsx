import { Suspense } from "react";
import Link from "next/link";
import Logo from "@components/logo";
import { GridBackground } from "@components/grid-background";
import Loading from "@app/(auth)/loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-6">
      <Link href="/" passHref legacyBehavior>
        <Logo />
      </Link>
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <GridBackground />
    </div>
  );
}
