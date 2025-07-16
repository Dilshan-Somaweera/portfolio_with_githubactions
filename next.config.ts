import type { NextConfig } from "next";

const repoName = "portfolio_with_githubactions"
  
const nextConfig: NextConfig = {
  /* config options here */
  output: "export", 
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
