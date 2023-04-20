/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const nextConfig = {
  experimental: {
    appDir: true,
  },

  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    plugins: [
      (config.module.generator.asset.publicPath = '/_next/'),
      new MiniCssExtractPlugin({
        experimentalUseImportModule: false,
      }),
    ];
    return config;
  },
};

module.exports = nextConfig;