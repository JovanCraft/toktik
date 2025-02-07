import { View, Text, StyleSheet } from "react-native";

export default function FriendsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Friends Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white'
  },
});
