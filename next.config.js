/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true, // Disable image optimization for static export
  },
  experimental: {
    serverActions: true,
  },
  output: "export", // Required for static export
  trailingSlash: true, // Ensures correct routing for static deployment
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || "", // Optional: for deploying on a subpath like "/portfolio"
};

module.exports = nextConfig;
