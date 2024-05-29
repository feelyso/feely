import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist", "@feely/ui", "@feely/lib"],
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default withNextra(nextConfig);
