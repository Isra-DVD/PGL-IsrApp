import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Tabs } from "expo-router";
import { ProfileDescription } from "../../../components/ProfileDescription";

const ProfileLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        header: () => <ProfileDescription />,
      }}
    >
      <Tabs.Screen
        name="hobbies"
        options={{
          title: "My Hobbies",
          href: "/profile/hobbies",
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
          title: "My Repository",
          href: "/profile/qr",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code-2" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default ProfileLayout;
