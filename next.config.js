require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_STRAPI_URL: process.env.REACT_APP_STRAPI_URL,
    REACT_APP_GOOGLE_MAPS_KEY: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  },
  images: {
    loader: "default",
    domains: ["localhost"],
  },
};
