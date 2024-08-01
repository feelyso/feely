// Import core
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
// Import custom
import { ThemeProvider } from "@components/theme-provider";
import ReactQueryProvider from "@app/context/queryClient";
import { metadata } from "@lib/metadata";
import { ToastProvider } from "@feely/ui/components/toast";
import "../styles/globals.css";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </head>
      <body>
        <ReactQueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </ReactQueryProvider>
        <ToastProvider />
        <Analytics />
      </body>
    </html>
  );
}
