import React from "react";
import { StatusBar } from "react-native"
import Logo from ".././../assets/logo.svg"
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


import {
  Container,
  Heard,
  TotalCard,
  HeardContent
} from "./styles";
import { Car } from '../../components/Car';



export function Home() {

  const carDataOne = {
    brand: 'Audi',
    name: 'R$ 5 Coupé',
    rent:{
      period: 'AO DIA',
      price: "120",
    },
    thumbnail:'https://logodownload.org/wp-content/uploads/2016/11/audi-logo.png'
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Heard>
      <HeardContent>
          <Logo
          width={RFValue(108)}
          height={RFValue(12)}
          />
          <TotalCard>
            Total de 12 Carros
          </TotalCard>
        </HeardContent>
      </Heard>
      <Car data={carDataOne}/>
      <Car data={carDataOne}/>

    </Container>
  );
}
