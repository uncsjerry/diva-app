import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WHY: Empty turbopack config to opt into Turbopack (Next.js 16 default).
  // PWA service worker is handled manually in public/sw.js instead of
  // a webpack-based plugin, since Turbopack doesn't support webpack plugins.
  turbopack: {},
};

export default nextConfig;
