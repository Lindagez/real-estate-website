const bcrypt = require('bcrypt');
const { getUserById } = require('../models/user');

exports.hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

exports.isValidPassword = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};

exports.passwordUpdater = async (userData) => {
  const { oldPassword, newPassword } = userData;
  userData.password && delete userData.password;
  if (oldPassword && newPassword) {
    const { id } = userData;
    const { result: { password } } = await getUserById(id);
    const isValid = await this.isValidPassword(oldPassword, password);
    if (isValid) {
      userData.password = await this.hashPassword(newPassword);
    } else {
      return { status: 401, error: true, message: "Wrong password" }
    }
    delete userData.newPassword;
    delete userData.oldPassword;
  }
  userData.oldPassword && delete userData.oldPassword;
  userData.newPassword && delete userData.newPassword;
  return userData;
}