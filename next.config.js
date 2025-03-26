require("dotenv").config();

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_STRAPI_URL: process.env.REACT_APP_STRAPI_URL,
    REACT_APP_GOOGLE_MAPS_KEY: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    REACT_APP_RECAPTCHA_SITE_KEY: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
    REACT_APP_GOOGLE_ANALYTICS: process.env.REACT_APP_GOOGLE_ANALYTICS,
  },
  images: {
    loader: "default",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};
