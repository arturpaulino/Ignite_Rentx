import React ,{useState} from "react";
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
import { Calendar , DayProps , generateInterfval, MarkedDateProps } from "../../components/Calendar";


import { useTheme } from "styled-components"
import ArrowSvg from "../../assets/arrow.svg";
import { useNavigation } from "@react-navigation/core";

export function Scheduling() {
  const [lastSelectDay , setlastSelectDay ] = useState<DayProps>({} as DayProps);
  const [markDates , setmarkDates ]         = useState<MarkedDateProps>({} as MarkedDateProps )

  const theme = useTheme()
  const navigation = useNavigation()

  function HandleChangeDay(date: DayProps) {
    let start = !lastSelectDay.timestamp ? date : lastSelectDay;
    let end = date;

    if ( start.timestamp > end.timestamp ) {
        start = end;
        end = start;
    }
    console.log('start e end ', start , end)

    setlastSelectDay(end);

    const interval = generateInterfval( start, end);
    setmarkDates(interval);
    console.log('interval', interval)

  }

  function HandleCarDetalhes() {
    navigation.navigate('SchedulingDetalis')
  }

  function HandleBack(){
    navigation.goBack();
  }

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
        onPress={HandleBack}/>

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
           <Calendar
            makeDates={markDates}
            onDayPress={HandleChangeDay}
           />
        </Content>
        <Footer>
            <Button title="Confirma" onPress={HandleCarDetalhes}/>
         </Footer>


    </Container>
  );
}
