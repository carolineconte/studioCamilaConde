/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.concatenateModules = true;
      config.optimization.minimize = true;
    }
    return config;
  },
};

export default nextConfig;