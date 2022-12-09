/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? 'https://www.erickbravoportfolio.com' : undefined,
  images: {
    domains: [
      `raw.githubusercontent.com`,
      `www.pngfind.com`,
      `openweathermap.org`,
      `emoji.slack-edge.com`
    ],
  },
  withVideos: withVideos()
};

