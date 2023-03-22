import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import Product from "@/components/product/Product";
import getProducts from "@/utils/getProducts";

export interface ProductInterface {
  value: string;
  id: number;
}

interface IParams extends ParsedUrlQuery {
  productId: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { productId } = context.params as IParams;

  const products = getProducts();
  const product = products.find(
    (product: ProductInterface) => product.id === +productId
  );

  return {
    props: { product },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = getProducts();
  const paths = products.map((product: { value: string; id: number }) => ({
    params: { productId: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export default Product;
