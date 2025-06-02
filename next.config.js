/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Hilink',    
  assetPrefix: '/Hilink/', 
  images: {
    unoptimized: true, 
  },
}

module.exports = nextConfig
