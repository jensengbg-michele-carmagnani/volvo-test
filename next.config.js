/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  image: {
    domains: ['images.unsplash.com', 'flowbite.com'],
  },
};

module.exports = nextConfig;
