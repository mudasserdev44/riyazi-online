/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep pages as static as possible to reduce edge/server work
  poweredByHeader: false,
  compress: true,
  // Optimize client bundles
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    // Use modern formats when available
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days CDN cache for optimized images
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },
  headers: async () => {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

