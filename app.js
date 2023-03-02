const express = require("express");
const cors = require("cors");
const PORT = require("./src/config.js").port;
//* import swagger.JSON
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");

//* database && init models
require("./src/db/database");
require("./src/models/initModels");
require("./src/models/users.model");


//* routers
const userRouter = require("./src/users/users.router");
const authRouter = require("./src/auth/auth.router");

//* init app
const app = express();

//* middlewares
app.use(cors());
app.use(express.json());

//* routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

//* swagger
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.get("/api/v1/", (req, res) => {
  res.status(200).json({
    message: "🌐 Hello Music!",
  });
});

app.listen(PORT, () => {
  console.log(`✳️ Server online at port: ${PORT}`);
});
