/**
 * @type {import('next').NextConfig}
 */

 module.exports = {
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
}
