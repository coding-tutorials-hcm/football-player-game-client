import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";

const { Navigator, Screen } = createBottomTabNavigator();

import Home from "./HomeScreen";
import Profile from "./ProfileScreen";
import Login from "./LoginScreen";

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

// const EmailIcon = (props) => <Icon {...props} name="email-outline" />;

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Home" icon={HomeIcon} />
    <BottomNavigationTab title="Login" icon={HomeIcon} />
    <BottomNavigationTab title="Profile" icon={PersonIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={Home} />
    <Screen name="Login" component={Login} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);

export default function Main() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
