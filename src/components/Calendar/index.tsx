import React from "react";
import { Feather  } from "@expo/vector-icons"
import { useTheme } from "styled-components"
import { Calendar as CustomCalendar} from "react-native-calendars"
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Oututro','Novembro','Dezembro'],
  monthNamesShort: ['Janv.','Fev.','Mar','Abr','Mai','Jun','Junl.','Agost','Set','Oct','Nov.','Dez'],

  dayNames: ['Domnigo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
  dayNamesShort: ['Dom.','Seg','Ter','Qua','Qui','Sex.','Sab'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

export function Calendar() {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={( direction ) =>
        <Feather
          size={24}
          color={ theme.colors.text}
          name={ direction == 'left' ? 'chevron-left': 'chevron-right' }
        />
      }
      headerStyle={{
         backgroundColor: theme.colors.secondary,
         borderBottomWidth: 0.05,
         borderBottomColor: theme.colors.detail,
         marginBottom:10,
      }}

      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily:  theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily:theme.fonts.secondary_600,
        textMonthFontSize:20,
        arrowStyle:{
            marginHorizontal: -15
        }
      }}
      minDate = {new Date()}

    />
  );
}
