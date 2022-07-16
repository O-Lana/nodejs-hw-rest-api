const registerUser = require("./register");
const loginUser = require("./login");
const getCurrent = require("./getCurrent");
const logoutUser = require("./logout");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  registerUser,
  loginUser,
  getCurrent,
  logoutUser,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};
