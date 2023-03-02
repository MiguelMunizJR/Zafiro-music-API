const { getUserByEmail } = require("../users/users.controllers");
const { comparePassword } = require("../utils/crypto");

//! the email is unique!
const loginUser = async (email, password) => {

  try {
    const user = await getUserByEmail(email);
    //? 'user.password' contain the encrypted password of my DB.
    const verifyPass = comparePassword(password, user.password);
    if (verifyPass) {
      return user;
    }
    return false;
  } catch (err) {
    return false;
  }
};

module.exports = {
  loginUser,
};