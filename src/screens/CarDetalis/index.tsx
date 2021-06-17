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
import { useNavigation , useRoute } from "@react-navigation/core";
import { carDTO } from "../../dtos/carDTO";
import {getAcessorys} from "../../Utils/GetAcessorys"


interface Params {
  car: carDTO;
}

export function CarDetalis() {
  const navigation = useNavigation()
  const route = useRoute();

  const { car } = route.params as Params;


  function HandleCarDetalhes() {
    navigation.navigate('Scheduling', { car })
  }

  function HandleBack(){
    navigation.goBack();
  }

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
        { car.accessories.map( item =>(

           <Acessory
             key={item.type}
             name={item.name}
             icon={getAcessorys(item.type)}
            />
          ))
        }


      </AcessoryList>
        <About>
        {car.about}
        </About>
     </Content>
     <Footer>
         <Button title="Confirmar" onPress={HandleCarDetalhes} />
     </Footer>

    </Container>
  );
}
