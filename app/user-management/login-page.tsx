import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { stylesLight } from "../../styles/styles";
import apiService from "../../service/api-service";
import { router } from "expo-router";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/;

    // ^[a-zA-Z0-9._%+-]+: La parte inicial del correo puede contener letras, números, puntos (.), guiones (-), o el signo más (+).
    // @[a-zA-Z0-9.-]+: Debe incluir un @ seguido por un dominio que puede contener letras, números, puntos (.) o guiones (-).
    // \.[cC][oO][mM]$: Asegura que el correo termine con .com (insensible a mayúsculas o minúsculas).

    if (!emailRegex.test(email)) {
      Alert.alert(
        "Error",
        "Por favor ingresa un email válido que contenga @ y termine en .com"
      );
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (validateInputs()) {
      apiService
        .login(email, password)
        .then((result) => {
          Alert.alert("Info", result, [
            {
              text: "OK",
              onPress: () => {
                setEmail("");
                setPassword("");
                if (result !== "Pasaron cosas") {
                  router.navigate("/home");
                }
              },
            },
          ]);
        })
        .catch((err) => {
          Alert.alert("Error", "Cosas pasaron");
        });
    } else {
      Alert.alert("Error", "Algo fue mal");
    }
  };

  return (
    <View style={stylesLight.registerContainer}>
      <Text style={stylesLight.registerTitle}>Inicio de sesión</Text>

      <TextInput
        style={stylesLight.registerInput}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={stylesLight.registerInput}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity
        style={stylesLight.registerButton}
        onPress={handleLogin}
      >
        <Text style={stylesLight.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={stylesLight.registerButton}
        onPress={() => router.navigate("/user-management/register-page")}
      >
        <Text style={stylesLight.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
