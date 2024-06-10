import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feely - User feedbacks get real by being rewarded",
  description:
    "Feely is a spot where user thoughts become a treasure. More than giving users a voice: it's encouraging them to listen to each other, through conversations and rewarding. The result? A product actually built for your people. And they will feel part of it.",
  keywords: ["Feely", "User Feedback", "Feedback Boards", "Roadmap", "Announcements"],
  metadataBase: new URL("https://feely.so"),
  alternates: {
    canonical: "https://feely.so",
  },
  openGraph: {
    title: "Feely - User feedbacks get real by being rewarded",
    description:
      "Feely is a spot where user thoughts become a treasure. More than giving users a voice: it's encouraging them to listen to each other, through conversations and rewarding. The result? A product actually built for your people. And they will feel part of it.",
    url: "https://feely.so",
    siteName: "Feely",
    images: [
      {
        url: "https://feely.so/images/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://feely.so/images/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "Feely is a spot where user thoughts become a treasure. More than giving users a voice: it's encouraging them to listen to each other, through conversations and rewarding. The result? A product actually built for your people. And they will feel part of it.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Feely - User feedbacks get real by being rewarded",
    description:
      "Feely is a spot where user thoughts become a treasure. More than giving users a voice: it's encouraging them to listen to each other, through conversations and rewarding. The result? A product actually built for your people. And they will feel part of it.",
    card: "summary_large_image",
    images: [
      {
        url: "https://feely.com/images/twitter-og.png",
        alt: "Feely Logo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon/android-icon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon/android-icon-72x72.png", type: "image/png", sizes: "72x72" },
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon/android-icon-144x144.png", type: "image/png", sizes: "144x144" },
      { url: "/favicon/android-icon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/favicon/apple-icon.png", type: "image/png" },
      { url: "/favicon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon/apple-icon-precomposed.png", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon/apple-icon-precomposed.png",
      },
      {
        rel: "icon",
        url: "/favicon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon/ms-icon-310x310.png",
        sizes: "310x310",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
