import React from "react";
import {Container , Header, CarImages , Content, Details , Description ,Period, Brand , Name , Rent,Price, About , AcessoryList,Footer

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
      <AcessoryList>
          <Acessory name="380KM/h" icon={speedSvg} />
          <Acessory name="3.2s" icon={accelerationSvg} />
          <Acessory name="800 HP" icon={forceSvg } />
          <Acessory name="Gaolina" icon={gasolineSvg} />
          <Acessory name="Auto" icon={exchangeSvg} />
          <Acessory name="2 Pessoas" icon={peopleSvg} />
      </AcessoryList>
        <About>
          tyyuayugsyu syukkkkkk kkkkk  bsubsu,
          njanisnnisnsinisnsi kkkkk kkk nsinsin,
          ininininini
        </About>
     </Content>
     <Footer>
         <Button title="Confirmar" />
     </Footer>

    </Container>
  );
}
