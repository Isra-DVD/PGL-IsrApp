import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { ProfileDescription } from "../../components/ProfileDescription";

export default () => {
  return (
    <Tabs
      screenOptions={{
        header: () => <ProfileDescription />,
        tabBarActiveTintColor: "#1083D6",
      }}
    >
      <Tabs.Screen
        name="hobbies"
        options={{
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
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code-2" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};
