const fs = require("fs");
const path = require("path");

const PRODUCTS_RELATIVE_DIR = "../../../../utils/products.json";

const getProducts = () => {
  try {
    const jsonPath = path.join(__dirname, PRODUCTS_RELATIVE_DIR);
    const data = fs.readFileSync(jsonPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
};

export default getProducts;
