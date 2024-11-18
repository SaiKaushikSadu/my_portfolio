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
  basePath: "/portfolio"
};

module.exports = nextConfig;
