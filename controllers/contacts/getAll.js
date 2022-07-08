const { Contact } = require("../../models");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = false } = req.query;
  const skip = (page - 1) * limit;
  const query = favorite ? { owner, favorite } : { owner };
  const result = await Contact.find(query, "-createdAt -updateAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email name");
  res.json(result);
};

module.exports = getAllContacts;
