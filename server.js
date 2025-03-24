const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const ApiError = require("./utils/ApiError");
const dbConnection = require("./config/database");
const categoryRoutes = require("./routes/categoryRoutes");
const GlobalErrorMiddlewre = require("./middlewares/GlobalErrorMiddleware");
const { default: mongoose } = require("mongoose");

dotenv.config();

/**Express app */
const app = express();

/**connect db */
dbConnection();

/**Middlewares */
if (process.env.NODE_ENV == "development") {
  app.use(express.json());
  app.use(morgan("dev"));
  console.log(`env mode ${process.env.NODE_ENV}`);
}

/**routes */
app.use("/api/v1/categories", categoryRoutes);

/**middlewares */
app.all("*", (req, res, next) => {
  next(new ApiError("route is not defined", 400));
});
app.use(GlobalErrorMiddlewre);

process.on("unhandledRejection", (err) => {
  console.log(`unhandled rejectionhhgh  error ${err}`);
  process.exit(1);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `App is running on http://${process.env.HOST || "localhost"}:${port}`
  );
});
