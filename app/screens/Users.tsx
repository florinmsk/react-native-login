import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { COLORS, SIZES } from "../constants/index";

import users from "../../data/users";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  telefon: string;
  avatar?: string;
};

const Users = ({ id, first_name }: User) => {
  useFocusEffect(
    React.useCallback(() => {
      // Scroll în partea de sus a paginii când devine vizibilă
      scrollViewRef.scrollTo({ x: 0, y: 0, animated: false });
    }, [])
  );

  return (
    <ScrollView style={styles.container} ref={(ref) => (scrollViewRef = ref)}>
      {users.map((user) => {
        return (
          <View style={styles.userCard} key={user.id}>
            <View style={styles.imgCard}>
              <Image
                style={styles.img}
                source={{ uri: user.avatar }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.contentCard}>
              <Text style={styles.name}>
                {user.first_name} {user.last_name}
              </Text>
              <Text>{user.telefon}</Text>
              <Text>{user.email}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.background,
    paddingTop: SIZES.xSmall,
  },
  userCard: {
    height: 110,
    backgroundColor: COLORS.white,
    marginBottom: SIZES.xSmall,
    // padding: SIZES.xSmall,
    borderRadius: SIZES.large,
    overflow: "hidden",
    flexDirection: "row",
  },
  imgCard: {
    height: 90,
    width: 90,
    borderRadius: SIZES.large,
    backgroundColor: COLORS.imgBackground,
    margin: SIZES.xSmall,
    overflow: "hidden",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  contentCard: {
    width: "100%",
    marginVertical: SIZES.xSmall,
    alignItems: "stretch",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
});
