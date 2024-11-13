import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { stylesLight } from "../styles/styles";
import Home from "../components/Home";

const home = () => {
  return (
    <View style={stylesLight.homeContainer}>
      <Home />
      <Link style={stylesLight.homeLink} href={"/hobbies"}>
        <Text>REPOSITORIO</Text>
      </Link>
    </View>
  );
};

export default home;
