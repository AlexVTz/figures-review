import React from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation}) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={30} color='black'
                style={styles.icon} onPress={openMenu}/>
            <View style={{flexDirection: 'row'}}>
                <Image 
                    style={styles.imageIcon} 
                    source={require('../assets/heart_logo.png')} />
                <Text style={styles.headerText}>
                    FiguresZone
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        color: 'grey',
        flexDirection: 'row',
        fontFamily: 'nunito-bold',
        fontSize: 28,
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: Platform.OS === 'ios' ? -40 : 10 
    },
    imageIcon: {
        height: 36,
        width: 36,
        marginHorizontal: 5
    }
})