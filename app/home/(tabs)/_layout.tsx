import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import HomeFeedScreen from ".";

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#000" },
      }}
    >
      {/* Video Scroll */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Video Scroll",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="caret-forward-circle-outline" size={size} color={color} /> // Play icon
          ),
        }}
      />

      {/* Friends */}
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} /> // Friends icon
          ),
        }}
      />

      {/* Upload */}
      <Tabs.Screen
        name="uplaod"
        options={{
          title: "Upload",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cloud-upload-outline" size={size} color={color} /> // Upload icon
          ),
        }}
      />

      {/* Messaging */}
      <Tabs.Screen
        name="messaging"
        options={{
          title: "Messaging",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-outline" size={size} color={color} /> // Messaging icon
          ),
        }}
      />

      {/* Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} /> // Profile icon
          ),
        }}
      />

    </Tabs>
  );
}
