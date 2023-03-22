const fs = require("fs");
const path = require("path");

const getAllData = (relativeDir: string) => {
  try {
    const jsonPath = path.join(__dirname, "../..", relativeDir);
    const data = fs.readFileSync(jsonPath, "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getAllData;
