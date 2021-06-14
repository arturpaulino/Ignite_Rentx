import React from "react";
import { useWindowDimensions } from "react-native";


import LogoSvg from "../../assets/logo_background_gray.svg"
import DoneSvg from "../../assets/done.svg"

import {Container, Title, Messager, Content, Footer } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";


export function SchedulingComplete() {
  const { width } = useWindowDimensions()
   return (
    <Container>
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Messager>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTXX {'\n'}
          pegar o seu automóvel.
        </Messager>
      </Content>
      <Footer>
        <ConfirmButton title="OK"/>
     </Footer>
    </Container>
  );
}
