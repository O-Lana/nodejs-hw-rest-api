const { createError } = require("../../helpers");
const contactsOperations = require("../../models/contacts");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.removeContact(id);
  if (!result) {
    throw createError(404);
  }
  res.json({
    message: "Contact deleted",
  });
};

module.exports = removeContact;
