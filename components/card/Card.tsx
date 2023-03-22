import Image from "next/image";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 16px;
`;

interface Props {
  title: string;
  image: string;
}

const Card: React.FC<Props> = ({ title, image }) => {
  return (
    <StyledDiv>
      <Image src={image} alt={title} width={150} height={150} />

      <Title>{title}</Title>
    </StyledDiv>
  );
};

export default Card;
