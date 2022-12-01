/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      `raw.githubusercontent.com`,
      `www.pngfind.com`,
    ],
  },
};

module.exports = nextConfig;
