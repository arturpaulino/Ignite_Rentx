import React, { useEffect, useState} from "react";
import {StatusBar, Alert , FlatList} from   "react-native";
import { BackButton } from "../../components/BackButton";
import { useNavigation , useRoute } from "@react-navigation/core";
import { Car } from '../../components/Car';
import {Container, Header, Title, Subtitle ,Content , Appointment, AppointmentTitle , AppointmentQuantiy, Name , CarWapper,   CarFooter ,CarFootertitle ,    CarFooterPeriod,  CarFooterDate } from "./styles";
import { AntDesign} from "@expo/vector-icons"


import { carDTO } from "../../dtos/carDTO";
import {Load} from '../../components/Load'
import  api from "../../service/api";
import { useTheme } from "styled-components"

interface CarPros{
  id:string;
  user_id: string
  car: carDTO;
  startDate:string,
  endDate: string
}
export function MyCars() {
  const [cars, setCars] = useState<CarPros>([]);
  const [loading, setLoading] =useState(true);
  const navigation = useNavigation()
  const theme = useTheme()

  function HandleBack(){
    navigation.goBack();
  }



  useEffect(() => {
    async function fecthCar() {
          try {
            const response = await api.get(`/schedules_byuser/?user_id=1`)
            setCars(response.data);
            console.log(response.data)
          } catch (error) {
             console.log(error)
          } finally {
            setLoading(false);
          }

      }
      fecthCar()

  }, [])

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
     <Subtitle> Teste </Subtitle>
     </Header>
     { loading? <Load/>:
    <Content>
      <Appointment>
        <AppointmentTitle>Agendamentos </AppointmentTitle>
        <AppointmentQuantiy>{cars.length}</AppointmentQuantiy>
      </Appointment>

      <FlatList
        data={cars}
        keyExtractor={ item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item }) =>(
          <CarWapper>
              <Car data={item.car} />
              <CarFooter>
              <CarFootertitle>Período</CarFootertitle>
              <CarFooterPeriod>
                <CarFooterDate>{item.startDate}</CarFooterDate>
                <AntDesign
                  name="arrowright"
                  size={20}
                  color={theme.colors.title}
                  style={{ marginHorizontal:10 }}
                />
                <CarFooterDate>{item.endDate}</CarFooterDate>

              </CarFooterPeriod>
            </CarFooter>
        </CarWapper>





        )  }
      />
    </Content>
    }
  </Container>
  );
}
