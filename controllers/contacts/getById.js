const contactsOperations = require("../../models/contacts");
const { createError } = require("../../helpers");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.getContactById(id);
  if (!result) {
    throw createError(404, "Not found");
  }
  res.json(result);
};

module.exports = getContactById;
