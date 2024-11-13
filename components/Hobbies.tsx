import React from "react";
import { ScrollView, Text } from "react-native";
import { stylesLight } from "../styles/styles";

export const Hobbies = () => {
  const favoriteItems = [
    "El Baito y AlexelCapso",
    "Quedar con mis colegas",
    "Salir a caminar al monte",
    "Ir a la playita",
    "Sabados de fiesta",
    "Domingos de resurrección",
    "Casita y videojuegos",
    "Viajar pero soy pobre asi que está tenso",
    "Hacer deporte",
    "Ducharme muy de vez en cuando (estudio informática)",
    "Ir de cena romántica con mi antiguo tutor ;);)codocodo",
  ];

  return (
    <ScrollView style={stylesLight.scrollContainer}>
      {favoriteItems.map((item, index) => (
        <Text key={index} style={stylesLight.favoritesItem}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
};
