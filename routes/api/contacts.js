const express = require("express");
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validation, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAllContacts));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validation(schemas.contactAddSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeContact));

router.put(
  "/:id",
  isValidId,
  validation(schemas.contactAddSchema),
  ctrlWrapper(ctrl.updateContactById)
);
router.patch(
  "/:id/favorite",
  isValidId,
  validation(schemas.updateFavoriteContact),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
