/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "toutlahaut.net",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
