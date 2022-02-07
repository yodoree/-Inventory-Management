import express from "express";
import morgan from "morgan";
import productRouter from "./routers/productRouter";
import rootRouter from "./routers/rootRouter";

const app = express();

const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));
app.use("/", rootRouter);
app.use("/products", productRouter);

export default app;
