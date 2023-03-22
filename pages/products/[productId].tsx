import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import Product from "@/components/product/Product";
import getAllData from "@/utils/getAlldata";

export interface ProductInterface {
  value: string;
  id: number;
}

interface IParams extends ParsedUrlQuery {
  productId: string;
}

const PRODUCTS_RELATIVE_DIR = "../../../utils/products.json";

const productsJson = getAllData(PRODUCTS_RELATIVE_DIR);
const products = JSON.parse(productsJson);

export const getStaticProps: GetStaticProps = async (context) => {
  const { productId } = context.params as IParams;

  const product = products.find(
    (product: ProductInterface) => product.id === +productId
  );

  return {
    props: { product },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product: { value: string; id: number }) => ({
    params: { productId: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export default Product;
