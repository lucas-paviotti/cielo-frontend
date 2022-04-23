require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_EMAILJS_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    REACT_APP_EMAILJS_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    REACT_APP_EMAILJS_PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    REACT_APP_STRAPI_URL: process.env.REACT_APP_STRAPI_URL,
  },
  images: {
    domains: ['localhost'],
  },
}
