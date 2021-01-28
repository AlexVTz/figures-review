import React from "react";
import {View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MainStackNavigator, AboutStackNavigator } from "./stackNavigator";

function DrawerContent({navigation}) {


	const navigate = (path) => {
		navigation.navigate(path);
		if(path === 'Home') {
			navigation.reset({
				index: 0,
				routes: [{ name: 'Home' }],
			  });
		}
	}

	return (
        <View style={{flex: 1, padding: 30}}>
            <View style={{paddingTop: 20}}>
              <TouchableOpacity onPress={() => navigate('Home')} >
                <Text>Home</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingTop: 20}}>
              <TouchableOpacity onPress={() => navigate('About')} >
                <Text>About</Text>
              </TouchableOpacity>
            </View>
        </View>
      );
}

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerType='slide' edgeWidth={0}
      drawerContent={props => <DrawerContent {...props}/>} >
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="About" component={AboutStackNavigator} />
    </Drawer.Navigator>
  );
}