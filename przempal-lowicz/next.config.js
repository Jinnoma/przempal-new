/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['react-medium-image-zoom'],
    webpack: (config) => {
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      });
      return config;
    },
  };
  
  module.exports = nextConfig;