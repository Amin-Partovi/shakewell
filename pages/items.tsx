import { GetStaticProps } from "next";

import CardList from "@/components/cardList/CardList";
import getCardItems from "@/utils/getCardItems";

export const getStaticProps: GetStaticProps = async () => {
  const data = getCardItems();

  return {
    props: { data },
    revalidate: 10,
  };
};

export default CardList;
