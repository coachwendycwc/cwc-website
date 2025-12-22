import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cwc-website",
  assetPrefix: "/cwc-website/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
