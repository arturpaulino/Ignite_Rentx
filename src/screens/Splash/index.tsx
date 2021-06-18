import React,{} from "react";
import{ Button, StyleSheet, Dimensions  } from "react-native"
import {Container } from "./styles";
import Animated, { useSharedValue, useAnimatedStyle , withTiming , Easing} from "react-native-reanimated";

const  WIDTH =  Dimensions.get('window').width ;

export function Splash() {
  const animation =useSharedValue(0);
  const useAnimatedStyles = useAnimatedStyle( () =>  {
    return {
        transform:  [{ translateX: withTiming(animation.value,{
            duration: 3000,
            easing: Easing.bezier(.17,.67,.83,.67)

        }) }]
    }
  });

  function HandleAnimation(){
    animation.value = Math.random() * (WIDTH -100);
  }
  return (
    <Container>

      <Animated.View style={[styles.box,useAnimatedStyles ]}/>
      <Button title="Mover" onPress={HandleAnimation}/>

    </Container>
  );
}
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})
