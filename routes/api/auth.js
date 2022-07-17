const express = require("express");
const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { validation, authenticate, upload } = require("../../middlewares");
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

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post(
  "/verify",
  validation(userSchemas.emailVerify),
  ctrlWrapper(ctrl.resendVerifyEmail)
);

module.exports = router;
