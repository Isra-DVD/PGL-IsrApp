import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { stylesLight } from "../../styles/styles";
import apiService from "../../service/api-service";
import { router } from "expo-router";

const RegisterScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    if (!fullName || fullName.length < 4) {
      Alert.alert("Error", "El nombre debe tener al menos 4 caracteres.");
      return false;
    }

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

    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

    // ^(?=.*\d): Asegura que al menos un carácter sea un número (\d).
    // (?=.*[a-zA-Z]): Asegura que haya al menos una letra (mayúscula o minúscula).
    // .{8,}$: Asegura que la contraseña tenga al menos 8 caracteres en total.

    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener al menos 8 caracteres y contener al menos un número."
      );
      return false;
    }

    return true;
  };

  const handleRegister = () => {
    if (validateInputs()) {
      apiService
        .register(fullName, email, password)
        .then((result) => {
          Alert.alert("Info", result, [
            {
              text: "OK",
              onPress: () => {
                setFullName("");
                setEmail("");
                setPassword("");
                if (result !== "Pasaron cosas") {
                  router.navigate("/user-management/login-page");
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
      <Text style={stylesLight.registerTitle}>Registro de Usuario</Text>

      <TextInput
        style={stylesLight.registerInput}
        placeholder="Nombre completo"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />

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
        onPress={handleRegister}
      >
        <Text style={stylesLight.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
