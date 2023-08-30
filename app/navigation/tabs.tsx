import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Scan from "../screens/Scan";
import { View, Text, Platform } from "react-native";
import Users from "../screens/Users";

import { COLORS, SIZES } from "../constants/index";

const Tab = createBottomTabNavigator();

const activ = {
  top: Platform.OS === "ios" ? 10 : 0,
  height: 50,
  width: 50,
  backgroundColor: COLORS.secondaryLight,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 24,
};

const inactiv = {
  top: Platform.OS === "ios" ? 10 : 0,
  height: 50,
  width: 50,
  backgroundColor: COLORS.white,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 24,
};

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: "flex",
          // elevation: 5,
          backgroundColor: COLORS.white,
          height: 80,
          borderColor: COLORS.white,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View {...((focused ? activ : inactiv) as any)}>
              <Feather
                name="home"
                size={30}
                color={focused ? COLORS.secondary : COLORS.primaryLight}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ focused }) => (
            <View {...((focused ? activ : inactiv) as any)}>
              <Feather
                name="camera"
                size={30}
                color={focused ? COLORS.secondary : COLORS.primaryLight}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarIcon: ({ focused }) => (
            <View {...((focused ? activ : inactiv) as any)}>
              <Feather
                name="users"
                size={30}
                color={focused ? COLORS.secondary : COLORS.primaryLight}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
