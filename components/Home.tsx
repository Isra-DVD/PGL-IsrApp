import { Text, Image } from "react-native";
import React from "react";
import { stylesLight } from "../styles/styles";

const home = () => {
  return (
    <>
      <Text style={stylesLight.homeTitle}>Bienvenido a mi App Portfolio</Text>
      <Image
        source={require("../assets/israeli-flag-israel.gif")}
        style={stylesLight.homeImage}
      />
    </>
  );
};

export default home;
