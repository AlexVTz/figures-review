import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import ReviewForm from "../shared/reviewForm";

export default function Home({ navigation }) {
  const [modal, setModal] = useState(false);
  const [reviews, setReviews] = useState([
    { name: "S.H Figuarts Trunks", rating: 5, body: "lorem ipsum", key: "1" },
    {
      name: "Banpresto Broly year 93",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      name: "Banpresto Match Makers Freezer",
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
    { name: "Mirio Age of Heroes", rating: 5, body: "lorem ipsum", key: "4" },
  ]);

  const addFigure = (newFigure) => {
    newFigure.key = Math.random().toString();
    setReviews((oldFigures) => [...oldFigures, newFigure]);
    setModal(false);
  };

  const nav = (item) => {
    navigation.navigate("Details", item);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modal} animationType="slide">
        <TouchableWithoutFeedback
          accessible={false}
          onPress={() => Keyboard.dismiss()}
        >
          <View style={styles.modalContainer}>
            <MaterialIcons
              name="close"
              style={styles.modalToggle}
              size={24}
              onPress={() => setModal(false)}
            />
            <ReviewForm addFigure={addFigure} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModal(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => nav(item)}>
            <Card>
              <Text style={styles.itemText}> {item.name} </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    padding: 50,
    height: "100%",
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  itemText: {
    fontFamily: "nunito-regular",
    fontSize: 18,
  },
});
