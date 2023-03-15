const axios = require("axios");
const { AUTHENTICATION_SERVICE_URL } = require("../config/config");
const authenticateRequest = async (req, res, next) => {
  try {
    console.log(req.headers["x-access-token"]);
    const response = await axios.get(
      `${AUTHENTICATION_SERVICE_URL}/authservice/api/v1/users/auth/isAuthenticated`,
      {
        headers: {
          "x-access-token": req.headers["x-access-token"],
        },
      }
    );
    console.log(response.data);
    if (response.data.success) {
      next();
    } else {
      return res.status(401).json({
        message:
          "unauthorized to access this resource ..kindly authorize first to access the route",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message:
        "unauthorized to access this resource ..kindly authorize first to access the route",
    });
  }
};
module.exports = authenticateRequest;
