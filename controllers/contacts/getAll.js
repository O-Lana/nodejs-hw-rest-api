const contactsOperations = require("../../models/contacts");

const getAllContacts = async (req, res) => {
  const result = await contactsOperations.listContacts();
  res.json(result);
};

module.exports = getAllContacts;
