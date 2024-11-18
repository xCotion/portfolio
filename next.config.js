/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // This might help with some React-related issues
    esmExternals: true
  }
}

module.exports = nextConfig
