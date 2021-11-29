import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../Components/ImageDetails";

const HomeScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Mariano Voila"
        image={require("../../assets/avatar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
