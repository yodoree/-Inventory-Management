import express from "express";
import {
  getDelete,
  getEdit,
  getUpload,
  postEdit,
  postUpload,
  productView,
} from "../controllers/productController";
import { imageUpload } from "../middlewares";

const productRouter = express.Router();

productRouter.get("/:id([0-9a-f]{24})", productView);
productRouter
  .route("/:id([0-9a-f]{24})/edit")
  .get(getEdit)
  .post(imageUpload.single("image"), postEdit);
productRouter.route("/:id([0-9a-f]{24})/delete").get(getDelete);
productRouter
  .route("/upload")
  .get(getUpload)
  .post(imageUpload.single("image"), postUpload);

export default productRouter;
