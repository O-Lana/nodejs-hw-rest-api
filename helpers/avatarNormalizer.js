const Jimp = require("jimp");

const avatarNormalizer = async (imagePath) => {
  const avatar = await Jimp.read(imagePath);
  const avatarResize = await avatar.resize(250, 250);
  await avatarResize.write(imagePath);
};

module.exports = avatarNormalizer;
