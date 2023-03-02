const adminValidate = (req, res, next) => {
  const role = req.user.role;

  console.log(role);

  if (role === "admin") {
    return next();
  } else {
    res.status(401).json({
      message: "Access Denied!",
    });
  }
};

module.exports = adminValidate;