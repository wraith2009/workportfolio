/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'aceternity.com'
          },
          {
            hostname: 'res.cloudinary.com'
          },
          {
            hostname: 'assets.aceternity.com'
          }
        ],
      },
};
export default nextConfig;
