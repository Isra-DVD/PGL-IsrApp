import React from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Text } from "react-native";
import { stylesLight } from "../styles/styles";

export const QrCode = () => {
  return (
    <>
      <Text style={stylesLight.descriptionTitle}>
        Escanea el código y accede al repositorio
      </Text>
      <View style={stylesLight.qrContainer}>
        <QRCode value="https://github.com/Isra-DVD/PGL-IsrApp.git" />
      </View>
    </>
  );
};
