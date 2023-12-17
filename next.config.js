/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['geist'],
  output: 'export'  // Add this line for static HTML export
}

module.exports = nextConfig;

