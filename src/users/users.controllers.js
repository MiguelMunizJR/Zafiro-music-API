const Users = require("../models/users.model");
const uuid = require("uuid");
const { hashPassword } = require("../utils/crypto");

const getAllUsers = async () => {
  const data = await Users.findAll({
    where: {
      status: "active",
    },
  });
  return data;
};

const getUserById = async (id) => {
  const user = await Users.findOne({
    where: {
      id,
    },
  });
  return user;
};

const getUserByEmail = async (email) => {
  const user = await Users.findOne({
    where: {
      email: email,
      status: "active",
    },
  });
  return user;
};

const createUser = async (data) => {
  const user = await Users.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashPassword(data.password),
    birthday: data.birthday,
    phone: data.phone,
    status: data.status,
    role: data.role,
  });
  return user;
};

const patchUser = async (id, data) => {
  const user = await Users.update(data, {
    where: {
      id,
    },
  });
  return user;
};

const deleteUser = async (id) => {
  const user = await Users.destroy({
    where: {
      id
    }
  });
  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  patchUser,
  deleteUser,
};
