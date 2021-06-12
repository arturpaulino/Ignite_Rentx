import React from "react";
import {Container , Header, CarImages , Content, Details , Description ,Period, Brand , Name , Rent,Price, About } from "./styles";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

export function CarDetalis() {
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
        <About>
          tyyuayugsyu syukkkkkk kkkkk  bsubsu,
          njanisnnisnsinisnsi kkkkk kkk nsinsin,
          ininininini
        </About>

    </Content>




    </Container>
  );
}
