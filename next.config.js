/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};
