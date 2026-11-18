import { fireweaveDefine } from "@fireweaveai/web-sdk/define";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: { define: fireweaveDefine() },
  transpilePackages: ["@clinic/ui"],
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
