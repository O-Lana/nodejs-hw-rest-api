const Joi = require("joi");

const contactAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(6).max(15).required(),
});

module.exports = {
  contactAddSchema,
};
