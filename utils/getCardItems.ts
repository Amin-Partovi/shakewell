const fs = require("fs");
const path = require("path");

const DATA_RELATIVE_DIR = "../../../utils/cardItems.json";

const getCardItems = () => {
  try {
    const jsonPath = path.join(__dirname, DATA_RELATIVE_DIR);
    const data = fs.readFileSync(jsonPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
};

export default getCardItems;
