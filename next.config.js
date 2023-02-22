/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  image: {
    domains: ['volvocars.com'],
  },
};

module.exports = nextConfig;
