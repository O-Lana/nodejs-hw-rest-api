const path = require("path");
const fs = require("fs/promises");

const { User } = require("../../models");
const { avatarNormalizer } = require("../../helpers");

const avatarDir = path.join(__dirname, "../..", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempDir, originalname } = req.file;
  const { _id } = req.user;
  const [extention] = originalname.split(".").reverse();
  const newName = `${_id}.${extention}`;
  const resultDir = path.join(avatarDir, newName);
  await fs.rename(tempDir, resultDir);
  avatarNormalizer(resultDir);
  const avatarURL = path.join("avatars", newName);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
