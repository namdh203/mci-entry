import express from "express";
import customerController from "../controllers/customerController.js";

const router = express.Router();

router
  .route("/")
  .get(customerController.getAllCustomer)
  .post(customerController.createCustomer);
router
  .route("/:id")
  .get(customerController.getCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

export default router;
