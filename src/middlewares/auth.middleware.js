const { jwtSecret } = require("../utils/config");
const { getUserById } = require("../users/users.controllers");

const JwtStrategy = require("passport-jwt").Strategy;
//? Extrae los headers de la peticion.
const ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: jwtSecret,
  };

  passport.use(
    new JwtStrategy(options, async (decoded, done) => {
      //? done(error, decoded)
      
      try {
        const response = await getUserById(decoded.id);
        if (!response) {
          return done(null, false);
        }
        console.log("decoded JWT", decoded);
        return done(null, decoded);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};