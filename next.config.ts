/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  // Include .ts so API route files like pages/api/contact.ts are picked up.
  // Without this, the contact API was excluded and resulted in a 405 when deployed.
  pageExtensions: ['ts', 'tsx']
}

module.exports = nextConfig
