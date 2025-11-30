/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // No remote images; using inline SVG/CSS
    unoptimized: true
  }
};

module.exports = nextConfig;

