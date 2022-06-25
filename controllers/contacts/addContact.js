const { createError } = require("../../helpers");
const { contactAddSchema } = require("../../schemas/contacts");
const contactsOperations = require("../../models/contacts");

const addContact = async (req, res) => {
  const { error } = contactAddSchema.validate(req.body);
  if (error) {
    throw createError(400, "missing required name field");
  }
  const result = await contactsOperations.addContact(req.body);
  res.status(201).json(result);
};

module.exports = addContact;
