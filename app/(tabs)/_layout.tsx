import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { View } from "react-native";
import { ProfileDescription } from "../../components/ProfileDescription";

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <ProfileDescription />
      <Tabs>
        <Tabs.Screen
          name="hobbies"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="clipboard-list-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="qr"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="qr-code-2" size={24} color="black" />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};
