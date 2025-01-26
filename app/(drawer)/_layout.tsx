import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Home",
            title: "Bienvenido",
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Hobbies",
            title: "Mis hobbies",
          }}
        />

        <Drawer.Screen
          name="shopping/index"
          options={{
            drawerLabel: "Tienda",
            title: "Tiendita",
          }}
        />
        <Drawer.Screen
          name="user-management/register-page"
          options={{
            drawerLabel: "Registro",
            title: "Registro",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};
