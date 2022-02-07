import express from "express";
import morgan from "morgan";
import productRouter from "./routers/productRouter";
import rootRouter from "./routers/rootRouter";

const logger = morgan("dev");

const app = express();

app.use(logger);
app.use("/", rootRouter);
app.use("products", productRouter);

export default app;
