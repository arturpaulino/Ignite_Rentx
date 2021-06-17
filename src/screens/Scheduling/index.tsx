import React ,{useState} from "react";
import {StatusBar, Alert } from   "react-native";


import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components"
import ArrowSvg from "../../assets/arrow.svg";
import { useNavigation , useRoute } from "@react-navigation/core";
import {format} from "date-fns"
import { GetPlatformDate} from "../../Utils/GetPlatformDate";

import { carDTO } from "../../dtos/carDTO";
import { Calendar , DayProps , generateInterfval, MarkedDateProps } from "../../components/Calendar";
import {Container, Header, Title,
  RenalTPeriod,
  DataInfo,
  DataTile,
  DateValue,
  Content,
  Footer
 } from "./styles";

interface rentalPeriodI{
  start: number;
  startFormat: string;
  end: number;
  endFormat: string;
}


interface Params {
  car: carDTO;
}

export function Scheduling() {
  const [lastSelectDay , setlastSelectDay ] = useState<DayProps>({} as DayProps);
  const [markDates , setmarkDates ]         = useState<MarkedDateProps>({} as MarkedDateProps )
  const [rentalPeriod,setRentalPeriod ]= useState<rentalPeriodI>({} as rentalPeriodI);
  const route = useRoute();
  const { car } = route.params as Params;


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

    const firsDate =  Object.keys(interval)[0];
    const endDate =  Object.keys(interval)[Object.keys(interval).length-1 ];

    setRentalPeriod(
      {
        start: firsDate.timestamp,
        end: endDate.timestamp,
        startFormat: format( GetPlatformDate( new Date(firsDate) ),'dd/MM/yyyy'),
        endFormat:   format( GetPlatformDate( new Date(endDate) ),'dd/MM/yyyy'),
      }
    )

  }

  function HandleCarDetalhes() {
    if (!rentalPeriod.startFormat || !rentalPeriod.endFormat)
      Alert.alert("Selecione um periodo")
    else{
      navigation.navigate('SchedulingDetalis',{
        car: car,
        dates: Object.keys(markDates)
      })
    }

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
             <DateValue selected={!!rentalPeriod.endFormat}> {rentalPeriod.startFormat} </DateValue>
           </DataInfo>
            <ArrowSvg/>
           <DataInfo>
             <DataTile>ATÉ</DataTile>
             <DateValue selected={!!rentalPeriod.endFormat}> {rentalPeriod.endFormat} </DateValue>
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
            <Button
            enabled={!!rentalPeriod.startFormat}

            title="Confirma" onPress={HandleCarDetalhes}/>
         </Footer>


    </Container>
  );
}
