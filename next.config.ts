import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Lets the dev server be opened from the local network address, not only localhost (development only)
  allowedDevOrigins: ["192.168.32.1"],
};

export default nextConfig;
