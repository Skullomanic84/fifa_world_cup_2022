/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
   images: {
    domains: ['upload.wikimedia.org'],
  },
}

module.exports = nextConfig
