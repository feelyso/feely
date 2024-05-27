/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [],
  },
  transpilePackages: ["@feely/lib", "@feely/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
