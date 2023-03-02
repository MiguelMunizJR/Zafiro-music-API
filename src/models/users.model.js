const db = require("../db/database.js");
const DataTypes = require("sequelize").DataTypes;

const Users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATEONLY,
    defaultValue: null,
  },
  phone: {
    type: DataTypes.DECIMAL,
    defaultValue: null,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
});

module.exports = Users;
