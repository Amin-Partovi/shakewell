const productGenerator = (length: number) => {
  const dataArray = [...Array(length).keys()];

  const data = dataArray.map((item) => ({
    value: `product ${item}`,
    id: item,
  }));

  return data;
};

export default productGenerator;
