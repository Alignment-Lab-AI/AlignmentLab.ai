/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['geist'],
  output: 'export',  // For static HTML export
  images: {
    unoptimized: true,  // Disables image optimization
  }
}

module.exports = nextConfig;

