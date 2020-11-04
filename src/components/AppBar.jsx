import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: 10,
    backgroundColor: "#24292e",
    marginBottom: 20,
  },
  text: { color: "white", fontSize: 24, fontWeight: "700" },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Repositories</Text>
    </View>
  );
};

export default AppBar;
