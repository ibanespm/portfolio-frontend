/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:   'wallpapers.com',
        pathname: '/**',
      },
    ],    domains: [
      'encrypted-tbn0.gstatic.com',
      // otros dominios que uses, por ejemplo:
      'wallpapers.com',
      'images.unsplash.com',
      'cdn.pixabay.com'
    ],
  },
}

export default nextConfig
