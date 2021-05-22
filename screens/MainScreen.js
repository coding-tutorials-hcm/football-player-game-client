import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Spinner,
} from "@ui-kitten/components";

const { Navigator, Screen } = createBottomTabNavigator();

import Home from "./HomeScreen";
import Profile from "./ProfileScreen";
import Login from "./LoginScreen";
import Quiz from "./QuizScreen";

import { useFonts } from "expo-font";
import Rank from "./RankScreen";
import History from "./HistoryScreen";

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const LayersIcon = (props) => <Icon {...props} name="layers-outline" />;

const ClockIcon = (props) => <Icon {...props} name="clock-outline" />;

const ChartIcon = (props) => <Icon {...props} name="bar-chart-outline" />;

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Home" icon={HomeIcon} />
    <BottomNavigationTab title="Rank" icon={ChartIcon} />
    <BottomNavigationTab title="Quiz" icon={LayersIcon} />
    <BottomNavigationTab title="Login" icon={HomeIcon} />
    <BottomNavigationTab title="History" icon={ClockIcon} />
    <BottomNavigationTab title="Profile" icon={PersonIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={Home} />
    <Screen name="Rank" component={Rank} />
    <Screen name="Quiz" component={Quiz} />
    <Screen name="Login" component={Login} />
    <Screen name="History" component={History} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);

export default function Main() {
  let [fontsLoaded] = useFonts({
    "poppins-extralight": require("../assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Spinner />;
  }
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
