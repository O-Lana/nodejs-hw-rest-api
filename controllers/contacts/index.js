const getAllContacts = require("./getAll");
const getContactById = require("./getById");
const addContact = require("./addContact");
const removeContact = require("./removeContact");
const updateContactById = require("./updateContactById");
const updateStatusContact = require("./updateFavoriteContact");

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContactById,
  updateStatusContact,
};
