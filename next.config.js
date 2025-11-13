/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'example.com', 'namariqgroup.com', 'alnamariqgroup.com'], // Add your domains
    unoptimized: true, // Disable Next.js image optimization for aPanel
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: false,
}

module.exports = nextConfig;
