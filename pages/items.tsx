import { GetStaticProps } from "next";

import getAllData from "@/utils/getAlldata";
import CardList from "@/components/cardList/CardList";

const DATA_RELATIVE_DIR = "../../utils/cardItems.json";

export const getStaticProps: GetStaticProps = async () => {
  const dataJson = getAllData(DATA_RELATIVE_DIR);
  const data = JSON.parse(dataJson);

  return {
    props: { data },
    revalidate: 10,
  };
};

export default CardList;
