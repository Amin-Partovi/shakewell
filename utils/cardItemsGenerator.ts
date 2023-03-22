const cardItemsGenerator = (length: number) => {
  const dataArray = [...Array(length).keys()];

  const data = dataArray.map((item) => ({
    value: `product ${item}`,
    id: item,
    image: "public/00ff.png",
  }));

  return JSON.stringify(data);
};

export default cardItemsGenerator;
