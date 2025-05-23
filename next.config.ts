import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export for Next.js 13.4+
  images: {
    unoptimized: true, // Disable Image Optimization API for static export
  },
  webpack(config) {
    // Add a rule to handle .mjs files
    config.module.rules.push({
      test: /\.mjs$/,
      type: "javascript/auto",
    });
    return config;
  },
};

export default nextConfig;
