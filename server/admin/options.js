import componentLoader from "./component-loader.js";
import Customer from "../models/customerModel.js";
import Product from "../models/productModel.js";

const options = {
  componentLoader,
  rootPath: "/admin",
  resources: [
    {
      resource: Customer,
      options: {
        navigation: { name: "Quan ly khach hang", icon: "User" },
      },
    },
    {
      resource: Product,
      options: {
        navigation: { name: "Quan ly san pham", icon: "Gift" },
      },
    },
  ],
  databases: [],
  branding: {
    companyName: "MCI Entry",
    logo: "",
  },
};

export default options;
