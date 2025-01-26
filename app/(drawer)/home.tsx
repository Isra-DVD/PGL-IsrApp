import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { stylesLight } from "../../styles/styles";
import Home from "../../components/Home";
import asyncStorageService from "../../service/async-storage";

const home = () => {
  return (
    <View style={stylesLight.homeContainer}>
      <Home />
      <Link style={stylesLight.Link} href={"./profile/qr"}>
        <Text>REPOSITORIO</Text>
      </Link>
      <Link style={stylesLight.Link} href={"./shopping"}>
        <Text>LISTA DE LA COMPRA</Text>
      </Link>
      <TouchableOpacity
        style={stylesLight.deleteButton}
        onPress={async () => {
          await asyncStorageService.removeData("token");
          router.navigate("user-management/login-page");
        }}
      >
        <Text style={stylesLight.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default home;
