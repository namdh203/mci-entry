import factory from "./handleFactory.js";
import Product from "../models/productModel.js";

const getAllProduct = factory.getAllDoc(Product);
const getProduct = factory.getOneDoc(Product);
const createProduct = factory.createOneDoc(Product);
const updateProduct = factory.updateOneDoc(Product);
const deleteProduct = factory.deleteOneDoc(Product);

export default {
  getAllProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
