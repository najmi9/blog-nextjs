/**
 * @type {import('next').NextConfig}
 */

 const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextjsDefaultConfig = {
  reactStrictMode: true,
  webpack: function(config) {
    config.resolve.fallback = { fs: false };

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });

    return config;
  },
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = withBundleAnalyzer(nextjsDefaultConfig)
