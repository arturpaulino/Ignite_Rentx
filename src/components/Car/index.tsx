import React from "react";
import {Container,
  Detalis,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage
} from "./styles";

interface CardData {
  brand: string;
  name: string;
  rent:{
     period: string;
     price: string;
  }
  thumbnail: string;
}

interface Props{
   data: CardData;
}

import GasolineSVG from "../../assets/gasoline.svg";

export function Car({ data }: Props) {
  return (
    <Container>
      <Detalis>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
              <Period>{data.rent.period}</Period>
              <Price>`R$ ${data.rent.price}`</Price>
          </Rent>
          <Type>
            <GasolineSVG></GasolineSVG>

          </Type>
        </About>
      </Detalis>
      <CarImage source={{ uri: data.thumbnail}}/>
    </Container>
  );
}
