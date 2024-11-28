import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { stylesLight } from "../styles/styles";
import Home from "../components/Home";

const home = () => {
  return (
    <View style={stylesLight.homeContainer}>
      <Home />
      <Link style={stylesLight.Link} href={"/hobbies"}>
        <Text>REPOSITORIO</Text>
      </Link>
      <Link style={stylesLight.Link} href={"./shopping"}>
        <Text>LISTA DE LA COMPRA</Text>
      </Link>
    </View>
  );
};

export default home;
