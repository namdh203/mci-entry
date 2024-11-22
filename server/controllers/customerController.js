import factory from "./handleFactory.js";
import Customer from "../models/customerModel.js";

const getAllCustomer = factory.getAllDoc(Customer);
const getCustomer = factory.getOneDoc(Customer);
const createCustomer = factory.createOneDoc(Customer);
const updateCustomer = factory.updateOneDoc(Customer);
const deleteCustomer = factory.deleteOneDoc(Customer);

export default {
  getAllCustomer,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
