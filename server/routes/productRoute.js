import express from "express";

import productController from "../controllers/productController.js";

const router = express.Router();

router
  .route("/")
  .get(productController.getAllProduct)
  .post(productController.createProduct);
router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;
