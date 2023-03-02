const router = require("express").Router();
const { createUser } = require("../users/users.services");
const authServices = require("./auth.services");

//TODO Auth va a contener las rutas de autenticacion y autorizacion.

//? Login
//? Register
//? Recovery password
//? Verify User

//? Ruta de register
router.post("/register", createUser);

//? Ruta de login
router.post("/login", authServices.login);

module.exports = router;