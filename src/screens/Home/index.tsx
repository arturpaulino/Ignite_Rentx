import React from "react";
import { StatusBar } from "react-native"
import Logo from ".././../assets/logo.svg"
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { Car } from '../../components/Car';

import {
  Container,
  Heard,
  TotalCard,
  HeardContent,
  CarList
} from "./styles";



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

      <CarList
         data={[1,2,3,4,5]}
         keyExtractor={ item => String(item)}
         renderItem={ ({ item }) =>  <Car data={carDataOne}/>
      }/>

    </Container>
  );
}
