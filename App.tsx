import React, {useState} from "react";
import {View, Text} from "react-native";

import AppLoading from "expo-app-loading";
import {ThemeProvider} from "styled-components";
import theme from "./src/global/styles/theme";
import 'react-native-gesture-handler';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";


import {Routes} from "./src/routes/";


export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <>
      <Routes/>
      </>
    </ThemeProvider>
  );
}
