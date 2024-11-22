import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Sản phẩm cần phải có tên"],
  },
  description: String,
  price: {
    type: Number,
    require: true,
    min: [0, "Giá sản phẩm không có giá trị âm"],
  },
  stock: {
    type: Number,
    default: 0,
    min: [0, "Số lượng sản phẩm không có giá trị âm"],
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
