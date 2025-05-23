/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "startupmarket.co",
      },
      {
        protocol: "https",
        hostname: "st4.depositphotos.com",
      },
    ],
  },
};

export default nextConfig;
