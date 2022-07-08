const express = require("express");
const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { validation, authenticate } = require("../../middlewares");
const { userSchemas } = require("../../models");

const router = express.Router();

router.post(
  "/signup",
  validation(userSchemas.registerUserSchemas),
  ctrlWrapper(ctrl.registerUser)
);

router.post(
  "/login",
  validation(userSchemas.loginUserSchemas),
  ctrlWrapper(ctrl.loginUser)
);

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.patch(
  "/",
  authenticate,
  validation(userSchemas.userSubscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

module.exports = router;
