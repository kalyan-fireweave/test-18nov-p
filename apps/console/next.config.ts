import { fireweaveDefine } from "@fireweaveai/web-sdk/define";
import type { NextConfig } from "next";

const fireweave = fireweaveDefine();

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@clinic/ui", "@fireweaveai/web-sdk"],
  webpack: (config) => {
    const DefinePlugin = config.plugins.find(
      (plugin: { constructor: { name: string } }) => plugin.constructor.name === "DefinePlugin",
    )?.constructor;
    if (DefinePlugin) config.plugins.push(new DefinePlugin(fireweave));
    return config;
  },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
