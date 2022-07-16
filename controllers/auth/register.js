const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4 } = require("uuid");

const { User } = require("../../models");
const { createError, sendMail } = require("../../helpers");

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw createError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);

  const verificationToken = v4();

  const result = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Подтверждение регистрации на сайте",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Нажмите для подтверждения email</a>`,
  };

  res.status(201).json({
    user: {
      name: result.name,
      email: result.email,
      subscription: result.subscription,
    },
  });
  await sendMail(mail);
};

module.exports = registerUser;
