import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

const Tab = createMaterialTopTabNavigator();

export default function ProfileScreen() {
  const router = useRouter();
  const [bio, setBio] = useState("This is a mock bio for the user profile.");
  const [isEditing, setIsEditing] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  const mockHistory = [
    { id: "1", title: "Video 1" },
    { id: "2", title: "Video 2" },
  ];

  const mockLikedVideos = [
    { id: "1", title: "Liked Video 3" },
    { id: "2", title: "Liked Video 1" },
    { id: "3", title: "Liked Video 2" },
  ];

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text style={{ color: "#fff" }}>{item.title}</Text>
    </View>
  );

  const ProfileHeader = () => (
    <View style={{ padding: 20 }}>
      <TouchableOpacity onPress={() => router.push('/home/(tabs)/index')} style={{ position: 'absolute', left: 20, top: 20 }}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
        />
        <Text style={{ color: "#fff", fontSize: 20 }}>@username</Text>
        {isEditing ? (
          <TextInput
            style={{ color: "#fff", marginVertical: 10, borderBottomColor: "#fff", borderBottomWidth: 1 }}
            value={bio}
            onChangeText={setBio}
          />
        ) : (
          <Text style={{ color: "#aaa", marginVertical: 10 }}>{bio}</Text>
        )}
        <TouchableOpacity onPress={() => setIsEditing(!isEditing)} style={{ backgroundColor: "#444", padding: 10, borderRadius: 5 }}>
          <Text style={{ color: "#fff" }}>{isEditing ? "Save Bio" : "Edit Bio"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <ProfileHeader />
      <Tab.Navigator initialRouteName="Bookmarks" screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#000" },
        tabBarIconStyle: { marginBottom: -4 },
        tabBarActiveTintColor: "#1E90FF", // Active color like the bottom tabs
        tabBarInactiveTintColor: "#fff", // Inactive color
      }}>
        <Tab.Screen name="History" options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}>
          {() => <FlatList data={mockHistory} renderItem={renderItem} keyExtractor={(item) => item.id} />}
        </Tab.Screen>
        <Tab.Screen name="Bookmarks" options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark-outline" size={size} color={color} />
          ),
        }}>
          {() => <FlatList data={bookmarks} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />}
        </Tab.Screen>
        <Tab.Screen name="Liked Videos" options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}>
          {() => <FlatList data={mockLikedVideos.sort((a, b) => b.id - a.id)} renderItem={renderItem} keyExtractor={(item) => item.id} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}
