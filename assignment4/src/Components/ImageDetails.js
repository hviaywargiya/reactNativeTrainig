import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ImageDetails = ({ title, image, navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.submitButtonText}> Profile </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 30,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
});

export default ImageDetails;
