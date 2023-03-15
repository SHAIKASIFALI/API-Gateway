const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const rateLimit = require("express-rate-limit");
const { PORT } = require("./config/config");
const ROUTES = require("./config/routesConfig");
const authenticateRequest = require("../src/utils/authenticateRequest");
const app = express();

app.use(morgan("combined"));
//setting up ratelimiter
ROUTES.forEach((route) => {
  if (route.ratelimit) app.use(route.url, rateLimit(route.ratelimit));
});

//setting up authetication ..
ROUTES.forEach((route) => {
  if (route.auth) app.use(route.url, authenticateRequest);
});
//setting up proxies
ROUTES.forEach((route) => {
  console.log(route.url, route.proxy);
  app.use(route.url, createProxyMiddleware(route.proxy));
});
console.log(PORT);
app.listen(PORT, async () => {
  console.log(`server is listening at port ${PORT}`);
});
