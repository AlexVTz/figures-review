import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { globalStyles, ratings } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
  const item = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={item.image} />
        </View>
        <Text style={styles.textItem}>{item.name}</Text>
        <Text style={styles.textItem}>{item.body}</Text>
        <View style={styles.ratingContainer}>
          <View>
            <Text style={styles.textItem}>Rating: </Text>
          </View>
          <Image style={styles.ratingIcons} source={ratings[item.rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  textItem: {
    paddingVertical: 5,
    fontSize: 18,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    height: 300,
    resizeMode: "contain",
  },
  ratingContainer: {
    marginTop: 10,
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderTopColor: "#aaa",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
  },
  ratingIcons: {
    marginTop: 2,
  },
});
