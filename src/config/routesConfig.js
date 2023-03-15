const {
  FLIGHTS_SEARCH_SERVICE_URL,
  AUTHENTICATION_SERVICE_URL,
  BOOKING_SERVICE_URL,
} = require("./config");

module.exports = [
  {
    url: `/searchservice`,
    auth: false,
    ratelimit: {
      windowMs: 15 * 60 * 1000,
      max: 5,
    },
    proxy: {
      target: FLIGHTS_SEARCH_SERVICE_URL,
      changeOrigin: true,
    },
  },
  {
    url: `/authservice`,
    auth: false,
    proxy: {
      target: AUTHENTICATION_SERVICE_URL,
      changeOrigin: true,
    },
  },
  {
    url: `/bookingservice`,
    auth: true,
    proxy: {
      target: BOOKING_SERVICE_URL,
      changeOrigin: true,
    },
  },
];
