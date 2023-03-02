const { Sequelize } = require("sequelize");
const config = require("../config.js");

const db = new Sequelize({
  dialect: "postgres",
  host: config.db.host,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  //? Opciones para conexion con DB en produccion
  dialectOptions:
    process.env.NODE_ENV === "production"
      ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
      : {},
});

db.authenticate()
  .then(() => {
    console.log("✔️  Database authenticate succesfully!");
  })
  .catch((err) => {
    console.error(err);
  });

db.sync()
  .then(() => {
    console.log("💠 Database synced succesfully!");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
