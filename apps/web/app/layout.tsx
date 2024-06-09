import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { ToastProvider } from "@feely/ui/components/toast";
import { ThemeProvider } from "@components/theme-provider";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Feely",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head><script src="https://accounts.google.com/gsi/client" async></script>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <ToastProvider />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
