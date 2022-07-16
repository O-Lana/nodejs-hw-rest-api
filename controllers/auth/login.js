const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");

const { createError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const passwordCompare = bcrypt.compareSync(password, user.password);

  if (!user || !passwordCompare) {
    throw createError(401, "Email or password is wrong");
  }

  if (!user.verify) {
    throw createError(401, "Email not verify");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
  });
};

module.exports = loginUser;
