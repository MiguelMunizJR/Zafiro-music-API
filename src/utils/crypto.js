const bcrypt = require("bcrypt");

//? Encripta la contraseña del usuario cuando se crea o se modifica la contraseña
const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10);
};

const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword
};