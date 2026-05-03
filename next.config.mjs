const nextConfig = {
  transpilePackages: ["@heroui/react", "@heroui/theme"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

export default nextConfig;