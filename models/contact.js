const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const contactAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(6).max(15).required(),
  favorite: Joi.bool(),
});

const updateFavoriteContact = Joi.object({
  favorite: Joi.bool().required(),
});

const schemas = {
  contactAddSchema,
  updateFavoriteContact,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
