/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Ensure clean URLs and optimal performance on Vercel
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
