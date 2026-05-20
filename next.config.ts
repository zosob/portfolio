import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Vercel handles the build pipeline natively — no static export needed.
  // Re-add output: 'export' only if you ever switch to GitHub Pages / Cloudflare.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;