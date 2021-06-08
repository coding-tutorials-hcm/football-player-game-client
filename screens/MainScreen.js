import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Spinner,
  Layout,
} from "@ui-kitten/components";

import Home from "./HomeScreen";
import Profile from "./ProfileScreen";
import Login from "./LoginScreen";
import Quiz from "./QuizScreen";
import QuizContainer from "../components/QuizContainer";

import { useFonts } from "expo-font";
import Rank from "./RankScreen";
import History from "./HistoryScreen";

import { fetchQuestions, fetchUsers, fetchUser } from "../redux/ActionCreators";
import { connect } from "react-redux";
import Finish from "./FinishScreen";

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: () => dispatch(fetchUser()),
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const LayersIcon = (props) => <Icon {...props} name="layers-outline" />;

const ClockIcon = (props) => <Icon {...props} name="clock-outline" />;

const ChartIcon = (props) => <Icon {...props} name="bar-chart-outline" />;

const { Navigator, Screen } = createBottomTabNavigator();

//Quiz
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
      <HomeNavigator.Screen component={Finish} name="Finish" />
    </QuizNavigator.Navigator>
  );
}

//Home
const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeNavigator.Screen component={Home} name="Home" />
      <HomeNavigator.Screen component={QuizContainer} name="QuizContainer" />
      <HomeNavigator.Screen component={Finish} name="Finish" />
    </HomeNavigator.Navigator>
  );
}

//Rank
const RankNavigator = createStackNavigator();
function RankNavigatorScreen() {
  return (
    <RankNavigator.Navigator
      initialRouteName="Rank"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RankNavigator.Screen component={Rank} name="Rank" />
    </RankNavigator.Navigator>
  );
}

//History
const HistoryNavigator = createStackNavigator();
function HistoryNavigatorScreen() {
  return (
    <HistoryNavigator.Navigator
      initialRouteName="History"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HistoryNavigator.Screen component={History} name="History" />
    </HistoryNavigator.Navigator>
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
    <BottomNavigationTab title="History" icon={ClockIcon} />
    <BottomNavigationTab title="Profile" icon={PersonIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={HomeNavigatorScreen} />
    <Screen name="Rank" component={RankNavigatorScreen} />
    <Screen name="Quiz" component={QuizNavigatorScreen} />
    <Screen name="History" component={HistoryNavigatorScreen} />
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
    return (
      <Layout style={styles.container} level="4">
        <Layout style={styles.layout} level="4">
          <Spinner />
        </Layout>
      </Layout>
    );
  }

  if (props.user.user.data) {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }

  return <Login />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
