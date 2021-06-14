import React from "react";
import {Container , Header, CarImages , Content, Details , Description ,Period, Brand , Name , Rent,Price, About ,  AcessoryList,Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RenatalPriceDetails,
  RenatlPriceQuote,
  RentalPriceTotal
} from "./styles";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Acessory } from "../../components/Acessory";
import { Button } from "../../components/Button";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from "styled-components";
import { Feather} from  "@expo/vector-icons";

export function SchedulingDetalis() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton  onPress={ ()=>{}}/>
      </Header>
      <CarImages>
       <ImageSlider imageURl={['https://logodownload.org/wp-content/uploads/2016/11/audi-logo.png']}/>
      </CarImages>

    <Content>
      <Details>
        <Description>
            <Brand>Teste</Brand>
            <Name>Teste name</Name>
        </Description>
        <Rent>
          <Period>Ao dia</Period>
          <Price>R$ 60</Price>
        </Rent>
      </Details>
      <AcessoryList>
          <Acessory name="380KM/h" icon={speedSvg} />
          <Acessory name="3.2s" icon={accelerationSvg} />
          <Acessory name="800 HP" icon={forceSvg } />
          <Acessory name="Gaolina" icon={gasolineSvg} />
          <Acessory name="Auto" icon={exchangeSvg} />
          <Acessory name="2 Pessoas" icon={peopleSvg} />
      </AcessoryList>
      <RentalPeriod>
        <CalendarIcon>
          <Feather
            name="calendar"
            size={RFValue(24)}
            color={theme.colors.shape}
          />
        </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>16/06/2021</DateValue>
          </DateInfo>
          <Feather
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
      </RentalPeriod>

      <RentalPrice>
        <RentalPriceLabel>TOTAL</RentalPriceLabel>
        <RenatalPriceDetails>
            <RenatlPriceQuote>R% 580x 3</RenatlPriceQuote>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
        </RenatalPriceDetails>
      </RentalPrice>
     </Content>
     <Footer>
         <Button title="Confirmar" />
     </Footer>

    </Container>
  );
}
