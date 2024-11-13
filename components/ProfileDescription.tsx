import React from "react";
import { View, Text, Image } from "react-native";
import { stylesLight } from "../styles/styles";

export const ProfileDescription = () => {
  return (
    <View style={stylesLight.profileContainer}>
      <Image
        style={stylesLight.avatar}
        source={require("../assets/capitanIsra.jpg")}
      />
      <View style={stylesLight.descriptionContainer}>
        <Text style={stylesLight.descriptionTitle}>Descripción sobre mí!</Text>
        <Text style={stylesLight.descriptionText}>
          Me llamo Israel como el estado ilegítimo pero soy mucho más buena
          onda. Este trabajo es una practica de programación multimedia
        </Text>
      </View>
    </View>
  );
};
