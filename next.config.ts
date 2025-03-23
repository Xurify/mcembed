import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/m/:id.png",
        destination: "https://modrinth-embed.vercel.app/:id.png",
      },
      {
        source: "/cf/:id(\\d+).png",
        destination: "https://curseforge-embed.vercel.app/:id.png",
      }
    ];
  },
};

export default nextConfig;
