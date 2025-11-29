/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  webpack: (config, { isServer }) => {
    // Only apply fallback for client-side builds
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        async_hooks: false, // ignore node:async_hooks on client
      };
    }
    return config;
  },
};

export default nextConfig;
