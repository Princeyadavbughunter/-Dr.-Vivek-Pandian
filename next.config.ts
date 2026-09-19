import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // This project's bundled Next.js defaults contentDispositionType to "attachment",
    // which makes the browser download optimized images instead of rendering them inline.
    contentDispositionType: "inline",
  },
};

export default nextConfig;
