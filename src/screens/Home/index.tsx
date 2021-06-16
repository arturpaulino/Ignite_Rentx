import React, {useEffect, useState} from "react";
import { StatusBar } from "react-native"
import Logo from ".././../assets/logo.svg"
import {  RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from "@react-navigation/core";
import { Car } from '../../components/Car';
import {Load} from '../../components/Load'

import {
  Container,
  Heard,
  TotalCard,
  HeardContent,
  CarList
} from "./styles";
import  api from "../../service/api";
import { carDTO } from "../../dtos/carDTO";


export function Home() {
  const navigation = useNavigation()
  const [cars, setCars] =useState([]);
  const [loading, setLoading] =useState(true);

  function HandleCarDetalhes(car: carDTO) {
    navigation.navigate('CarDetalis', {car })
  }

   useEffect(() => {
     async function fecthCar() {
          try {
            const response =  await api.get('/cars');
            setCars(response.data);

            setLoading(false)
          } catch (error) {
            console.log(error)
          } finally {
            setLoading(false)
          }
       }
       fecthCar()

   }, [])


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
      { loading? <Load/>:
        <CarList
          data={cars}
          keyExtractor={ item => String(item.id)}
          renderItem={ ({ item }) =>  <Car data={item} onPress={ ()=> HandleCarDetalhes(item)}/>
        }/>
      }
    </Container>
  );
}
