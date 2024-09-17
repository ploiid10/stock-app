/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  }
};

export default nextConfig;
