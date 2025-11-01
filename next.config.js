/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
      // If you also use gs:// bucket public URLs via storage.googleapis.com
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      // Unsplash images
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

module.exports = nextConfig;
