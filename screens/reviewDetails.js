import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles, ratings } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({route}) {

    const item = route.params;

    return (
            <View style={globalStyles.container}>
                <Card>
                    <Text>
                        {item.name}
                    </Text>
                    <Text>
                        {item.body}
                    </Text>
                    <View style={styles.ratingContainer}>
                        <View>
                        <Text>Rating: </Text>
                        </View>
                        <Image source={ratings[item.rating]} />
                    </View>
                </Card>
            </View>
    )
}

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row'
    }
})