/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@feely/ui", "@feely/lib"],
  modularizeImports: {
    "@feely/ui/components/icon": {
      transform: "lucide-react/dist/esm/icons/{{ kebabCase member }}",
      preventFullImport: true,
    },
    lodash: {
      transform: "lodash/{{member}}",
    },
  },
  images: {
    domains: [],
  },
};

export default nextConfig;
