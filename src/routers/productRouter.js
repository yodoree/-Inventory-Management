import express from "express";
import {
  getDelete,
  getEdit,
  getUpload,
  postEdit,
  postUpload,
  productView,
} from "../controllers/productController";

const productRouter = express.Router();

productRouter.get("/:id([0-9a-f]{24})", productView);
productRouter.all("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
productRouter.all("/:id([0-9a-f]{24})/delete").get(getDelete);
productRouter.all("/:id([0-9a-f]{24})/upload").get(getUpload).post(postUpload);

export default productRouter;
