import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProfileScreen = ({ title, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
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
});

export default ProfileScreen;
