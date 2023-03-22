import { ProductInterface } from "@/pages/products/[productId]";

interface Props {
  product: ProductInterface;
}

const Product: React.FC<Props> = ({ product }) => {
  const { value } = product;

  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

export default Product;
