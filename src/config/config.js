const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  FLIGHTS_SEARCH_SERVICE_URL: process.env.FLIGHTS_SEARCH_SERVICE_URL,
  AUTHENTICATION_SERVICE_URL: process.env.AUTHENTICATION_SERVICE_URL,
  BOOKING_SERVICE_URL: process.env.BOOKING_SERVICE_URL,
};
