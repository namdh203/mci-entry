import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Khách hàng cần phải có email"],
    unique: true,
  },
  name: {
    type: String,
    require: [true, "Khách hàng cần phải có tên"],
  },
  phone: String,
  country: String,
  address: String,
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
