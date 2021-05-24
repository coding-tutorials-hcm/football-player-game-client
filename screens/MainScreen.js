import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Spinner,
} from "@ui-kitten/components";

import Home from "./HomeScreen";
import Profile from "./ProfileScreen";
import Login from "./LoginScreen";
import Quiz from "./QuizScreen";
import QuizContainer from "../components/QuizContainer";

import { useFonts } from "expo-font";
import Rank from "./RankScreen";
import History from "./HistoryScreen";

import { fetchQuestions, fetchUsers } from "../redux/ActionCreators";
import { connect } from "react-redux";
import QuizHistory from "./QuizHistoryScreen";
import QuizHistoryContainer from "../components/QuizHistoryContainer";

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchUsers: () => dispatch(fetchUsers()),
});

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const LayersIcon = (props) => <Icon {...props} name="layers-outline" />;

const ClockIcon = (props) => <Icon {...props} name="clock-outline" />;

const ChartIcon = (props) => <Icon {...props} name="bar-chart-outline" />;

const { Navigator, Screen } = createBottomTabNavigator();

const QuizNavigator = createStackNavigator();
function QuizNavigatorScreen() {
  return (
    <QuizNavigator.Navigator
      initialRouteName="Quiz"
      screenOptions={{
        headerShown: false,
      }}
    >
      <QuizNavigator.Screen component={Quiz} name="Quiz" />
      <QuizNavigator.Screen component={QuizContainer} name="QuizContainer" />
    </QuizNavigator.Navigator>
  );
}

const QuizHistoryNavigator = createStackNavigator();

function QuizHistoryNavigatorScreen() {
  return (
    <QuizNavigator.Navigator
      initialRouteName="QuizHistory"
      screenOptions={{
        headerShown: false,
      }}
    >
      <QuizNavigator.Screen component={QuizHistory} name="QuizHistory" />
      <QuizNavigator.Screen
        component={QuizHistoryContainer}
        name="QuizHistoryContainer"
      />
    </QuizNavigator.Navigator>
  );
}
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
    <Screen name="Quiz" component={QuizNavigatorScreen} />
    <Screen name="Login" component={Login} />
    <Screen name="History" component={History} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);

function Main(props) {
  let [fontsLoaded] = useFonts({
    "poppins-extralight": require("../assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    props.fetchQuestions();
    props.fetchUsers();
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

export default connect(null, mapDispatchToProps)(Main);
