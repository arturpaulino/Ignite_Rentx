import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {useTheme } from 'styled-components'
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {Container, ImageIndexes ,ImageIndex , CarImageWrapper ,CarImage } from "./styles";

interface imagePros  {
  imageURl: string[];
}
export function ImageSlider({ imageURl } : imagePros) {
  const theme = useTheme();
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex
        active={false} />
      </ImageIndexes>

      <CarImageWrapper>
          <CarImage
          source={{ uri: imageURl[0] }}
          resizeMode='contain'/>
     </CarImageWrapper>
    </Container>
  );
}
