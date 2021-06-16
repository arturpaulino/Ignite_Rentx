import SpeedSvg from "../assets/speed.svg";
import AccelerationSvg from "../assets/acceleration.svg";
import ForceSvg from "../assets/force.svg";
import GasolineSvg from "../assets/gasoline.svg";
import ExchangeSvg from "../assets/exchange.svg";
import PeopleSvg from "../assets/people.svg";
import CarSvg from "../assets/car.svg";

export function getAcessorys( type: string){
  switch(type){
    case 'speed':
      return SpeedSvg;
    case 'AccelerationSvg':
      return AccelerationSvg;
    case 'turning_diameter':
     return ForceSvg;

    default:
      return CarSvg;


  }

}
