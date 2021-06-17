import React, {useState , useEffect} from "react";
import {Alert} from "react-native"
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
import { useNavigation , useRoute } from "@react-navigation/core";
import { carDTO } from "../../dtos/carDTO";
import {format} from "date-fns"
import { GetPlatformDate} from "../../Utils/GetPlatformDate";
import  api from "../../service/api";

interface Params {
  car: carDTO;
  dates: string[];
}
interface rentalPeriodoI{
  start: string;
  end: string;
}

export function SchedulingDetalis() {
  const navigation = useNavigation()
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const [rentalPeriodo, serentalPeriodo ] = useState<rentalPeriodoI>({} as rentalPeriodoI )
  const renTotal = Number( dates.length * car.rent.price);
  const theme = useTheme();


  async function HandleCarDetalhes() {
    const agendamentosCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates =[
      ...agendamentosCar.data.unavailable_dates,
      ...dates
    ]

    const response2 = await api.put(`/schedules_byuser/${car.id}`,{
      id: 1,
      car ,
    })


     const response = await api.put(`/schedules_bycars/${car.id}`,
    {
      id: car.id,
      unavailable_dates

    })
    .then( reponse =>  navigation.navigate('SchedulingComplete' ))
    .catch( ()=> Alert.alert("Não possivel confirma o agendamento"))




  }
  function HandleBack(){
    navigation.goBack();
  }




  useEffect(() => {
    serentalPeriodo({
      start: format( GetPlatformDate( new Date(dates[0]) ),'dd/MM/yyyy'),
      end:   format( GetPlatformDate( new Date(dates[dates.length - 1]) ),'dd/MM/yyyy'),
    })
  }, [])

  return (
    <Container>
      <Header>
        <BackButton  onPress={HandleBack}/>
      </Header>
      <CarImages>
       <ImageSlider imageURl={car.photos}/>
      </CarImages>

    <Content>
      <Details>
        <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
        </Description>
        <Rent>
          <Period>{car.rent.period}</Period>
          <Price>{car.rent.price}</Price>
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
            <DateValue>{rentalPeriodo.start}</DateValue>
          </DateInfo>
          <Feather
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriodo.end}</DateValue>
          </DateInfo>
      </RentalPeriod>

      <RentalPrice>
        <RentalPriceLabel>TOTAL</RentalPriceLabel>
        <RenatalPriceDetails>
            <RenatlPriceQuote>{`R$ ${car.rent.price} x ${dates.length} `}</RenatlPriceQuote>
            <RentalPriceTotal>{renTotal}</RentalPriceTotal>
        </RenatalPriceDetails>
      </RentalPrice>
     </Content>
     <Footer>
         <Button color={theme.colors.success} title="Alugar agora" onPress={HandleCarDetalhes}/>
     </Footer>

    </Container>
  );
}
