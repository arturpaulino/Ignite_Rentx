import React from "react";
import {StatusBar} from "react-native";
import {Container, Header, Title,
  RenalTPeriod,
  DataInfo,
  DataTile,
  DateValue,
  Content,
  Footer
 } from "./styles";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";


import { useTheme } from "styled-components"
import ArrowSvg from "../../assets/arrow.svg";


export function Scheduling() {
  const theme = useTheme()
  return (
    <Container>
       <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <BackButton
        color ={theme.colors.shape}
        onPress={ ()=>{}}/>

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RenalTPeriod>
           <DataInfo>
             <DataTile>DE</DataTile>
             <DateValue  selected={false}/>
           </DataInfo>
            <ArrowSvg/>
           <DataInfo>
             <DataTile>ATÉ</DataTile>
             <DateValue selected={false}/>
           </DataInfo>

        </RenalTPeriod>
        </Header>
        <Content>
           <Calendar/>
        </Content>
        <Footer>
            <Button title="Confirma"/>
         </Footer>


    </Container>
  );
}
