/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  image: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;
