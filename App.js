import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./routes/drawerNavigator";

const getFonts = () =>
  useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  let [fontsLoaded] = getFonts();

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <DrawerNavigator />
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
}
