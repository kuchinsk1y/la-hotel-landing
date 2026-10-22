import type { NextConfig } from "next";

// GitHub Pages serves the site from /<repo>, so the build needs a base path and a static export.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/la-hotel-landing" : "";

const nextConfig: NextConfig = {
  ...(isPages && { output: "export", basePath, images: { unoptimized: true } }),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
