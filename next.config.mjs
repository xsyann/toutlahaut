/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.toutlahaut.net",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
