import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { COLORS, SIZES } from "../constants";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.background,
    paddingTop: SIZES.xSmall,
  },
});
