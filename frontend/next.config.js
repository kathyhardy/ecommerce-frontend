// frontend/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Example: allow images from external domains
  images: {
    domains: ['your-cdn.com', 'storage.googleapis.com'],
  },

  // Rewrites: forward API calls to Cloud Run
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://YOUR_CLOUD_RUN_SERVICE_URL/:path*',
      },
    ];
  },
};

module.exports = nextConfig;