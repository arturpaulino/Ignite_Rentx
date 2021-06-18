import React, {useRef , useState} from "react";
import {FlatList, ViewToken} from "react-native"
import { MaterialIcons } from "@expo/vector-icons";
import {useTheme } from 'styled-components'
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {Container, ImageIndexes ,ImageIndex , CarImageWrapper ,CarImage } from "./styles";

interface imagePros  {
  imageURl: string[];
}

interface ChangeImageProps{
  viewatbleItems: ViewToken[];
  changed: ViewToken[];
}
export function ImageSlider({ imageURl } : imagePros) {
  const [imageIndex, setImageIndex]= useState(0);

  const indexChange = useRef((info:ChangeImageProps) =>{
    console.log('INFO', info)
    const index = info.viewableItems[0].index!;

    setImageIndex(index);
  })
  const theme = useTheme();
  return (
    <Container>
      <ImageIndexes>
        {
            imageURl.map( (item, index) =>(
              <ImageIndex
                key={String(index)}
                active={index === imageIndex}
              />

            ))
        }


        <ImageIndex
        active={false} />
      </ImageIndexes>

      <FlatList
        data={imageURl}
        keyExtractor={ key => key}
        renderItem={ ({ item }) => (
          <CarImageWrapper>
          <CarImage
          source={{ uri: item }}
          resizeMode='contain'/>
        </CarImageWrapper>

      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={indexChange.current}
      />

    </Container>
  );
}
