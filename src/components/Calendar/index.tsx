import React from "react";
import { Feather  } from "@expo/vector-icons"
import { useTheme } from "styled-components"
import { Calendar as CustomCalendar} from "react-native-calendars"


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
         paddingBottom:10,
         marginBottom:10
      }}

      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily:  theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        arrowStyle:{
            marginHorizontal: -15
        }
      }}






    />
  );
}
