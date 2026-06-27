/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  images: {
    domains: ['wavecoreerp.vercel.app'],
  },
}

module.exports = nextConfig

