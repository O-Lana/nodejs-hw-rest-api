const { contactAddSchema } = require("../../schemas/contacts");
const { createError } = require("../../helpers");
const contactsOperations = require("../../models/contacts");

const updateContactById = async (req, res, next) => {
  const { error } = contactAddSchema.validate(req.body);
  if (error) {
    throw createError(400, "missing fields");
  }
  const { id } = req.params;
  const result = await contactsOperations.updateContact(id, req.body);
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = updateContactById;
