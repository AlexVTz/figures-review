import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import Details from "../screens/reviewDetails";
import About from '../screens/about';

import Header from '../shared/header';
import { Platform, Image} from "react-native";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerTintColor: '#444',  
    headerStyle: { 
        backgroundColor: '#eee', 
        height: Platform.OS === 'ios' ? 100 : 60 },
    headerBackTitle: 'Back',
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} 
        options={({...props}) => ({
          headerTitle: () => <Header {...props} />,
          headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{height:'100%'}}/>})} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

const AboutStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="About" component={About} 
          options={({...props}) => ({
            headerTitle: () => <Header {...props} />,
            headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{height:'100%'}}/>})}  />
      </Stack.Navigator>
    );
  }

export { MainStackNavigator, AboutStackNavigator };