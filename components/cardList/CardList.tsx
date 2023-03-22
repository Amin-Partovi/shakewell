"use client";

import React from "react";
import styled from "styled-components";

import Card from "../card/Card";

export interface CardItem {
  value: string;
  id: number;
  image: string;
}

interface Props {
  data: CardItem[];
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
  padding: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const CardList: React.FC<Props> = ({ data }) => {
  return (
    <Grid>
      {data.map((item: CardItem) => (
        <Card title={item.value} key={item.id} image={item.image} />
      ))}
    </Grid>
  );
};

export default CardList;
