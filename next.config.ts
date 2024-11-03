import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['*'], // מאפשר גישה לכל הדומיינים
  }
};

export default nextConfig;
