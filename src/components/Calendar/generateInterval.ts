import { eachDayOfInterval, format } from "date-fns"

import { MarkedDateProps, DayProps} from ".";
import theme from "../../global/styles/theme";

import { GetPlatformDate} from "../../Utils/GetPlatformDate";

export function generateInterfval(start: DayProps, end: DayProps){
  let intervalo: MarkedDateProps= {};

   eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp)})
   .forEach(item  => {
     console.log( 'item antes ', item )
     const date = format(GetPlatformDate(item ), 'yyyy-MM-dd');
     console.log( 'item depis forma  ', date )

     intervalo = {
      ...intervalo,
      [date]: {
         color: start.dateString === date || end.dateString === date
         ? theme.colors.main : theme.colors.main_light,

         textColor: start.dateString === date || end.dateString === date
         ? theme.colors.main_light : theme.colors.main,
      }
    }

   });
  return intervalo;

}
