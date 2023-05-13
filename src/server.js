import express from "express";
import path from "path";
import { PORT } from "./config/config.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { customError } from "./exception/customError.js";
import { startSequelize } from "./utils/sequelize.js";
import allModels from "./modules/allModels.js";
import allRoutes from "./modules/index.js";
const app = express();

app.use(express.json());
startSequelize(allModels);
app.use(allRoutes);
app.get("/images/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    res.sendFile(path.join(process.cwd(), "uploads",`${id}`));
  } catch (error) {
    console.log(error);
    next(new customError(500, "internal error"));
  }
});
app.use("/*", (_, __, next) => next(new customError(404, "page not found")));
app.use(errorHandler);
app.listen(PORT, console.log(`server on ${PORT}`));
