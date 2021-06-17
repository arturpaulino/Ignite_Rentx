import React from "react";

import {Container, Title } from "./styles";
import { useTheme } from "styled-components";
import {ActivityIndicator} from 'react-native';
import theme from "../../global/styles/theme";
interface Props {
  color?: string;
  title: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;

}
export function Button({ color , title,  onPress, enabled = true, loading=false } : Props) {
  const theme = useTheme();
  return (
    <Container
    style={{ opacity: (enabled === false || loading === true ) ?  0.5: 1 }}
    enabled color={color ?  color : theme.colors.main} onPress={onPress} >
      { loading
       ? <ActivityIndicator color={ theme.colors.shape}/>
       : <Title>{title}</Title>
      }
    </Container>
  );
}
