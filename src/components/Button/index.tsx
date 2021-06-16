import React from "react";

import {Container, Title } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  color?: string;
  title: string;
  onPress: () => void;

}
export function Button({ color , title,  onPress } : Props) {
  const theme = useTheme();
  return (
    <Container  color={color ?  color : theme.colors.main} onPress={onPress} >
      <Title>{title}</Title>
    </Container>
  );
}
