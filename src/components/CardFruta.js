import React from "react";
import styled from "styled-components";

export default function CardFruta(props) {
  return (
    <CardContainer>
      <Image src={props.fruta.url} alt={props.fruta.name} />
      <p>{props.fruta.name}</p>
      <p>R${props.fruta.price}</p>
      <button onClick={() => props.comprar(props.fruta.id)}>Comprar</button>
    </CardContainer>
  );
}
const Image = styled.img`
  width: 80%;
`;
const CardContainer = styled.section`
  width: 150px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;
