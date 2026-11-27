import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // The full system now lives on the landing page.
  async redirects() {
    return [{ source: "/system", destination: "/#full-system", permanent: true }];
  },
};

export default nextConfig;
