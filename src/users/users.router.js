const usersServices = require("./users.services");
const router = require("express").Router();

//* admin validate middleware
const adminValidate = require("../middlewares/role.middleware");

//* authentication with passport jwt
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

//* route / (users info, admin required)
router.route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    // adminValidate,
    usersServices.getAllUsers
  );

//* route /:id (user info)
router.route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    usersServices.getUserById
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    usersServices.updateUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    usersServices.deleteUser
  );


//* route /me (user info)
router.route("/me")
  .get(
    passport.authenticate("jwt", { session: false }),
    usersServices.getMyUser
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    usersServices.updateMyUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    usersServices.deleteMyUser
  );

module.exports = router;