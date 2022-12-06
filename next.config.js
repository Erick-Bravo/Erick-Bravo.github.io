/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? 'https://www.erickbravoportfolio.com' : undefined,
  images: {
    domains: [
      `raw.githubusercontent.com`,
      `www.pngfind.com`,
      `openweathermap.org`
    ],
  },
};

module.exports = nextConfig;
