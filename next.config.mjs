/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ledgr-finance',
  assetPrefix: '/ledgr-finance/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
