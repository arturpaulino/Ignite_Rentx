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
import {RectButtonProps} from 'react-native-gesture-handler';
import { carDTO } from "../../dtos/carDTO";



interface Props extends RectButtonProps {
   data: carDTO;
}

import GasolineSVG from "../../assets/gasoline.svg";

export function Car({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
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
