import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Layout,
  Text,
  Avatar,
  Button,
  Icon,
  List,
  ListItem,
} from "@ui-kitten/components";

const data = new Array(8).fill({
  name: "Bruce Welch",
  points: "9,905 points",
});
export default function Rank() {
  const renderItemAccessory = (props) => <Button size="tiny">View</Button>;

  const renderItemIcon = (props) => <Icon {...props} name="person" />;

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.name} ${index + 1}`}
      description={`${item.points} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <Layout style={styles.container}>
      <View style={styles.nav}>
        <Icon style={styles.icon} name="arrow-ios-back-outline" />
        <Text style={styles.navTitle} category="h4">
          Ranking
        </Text>
        <Avatar size="small" source={require("../assets/images/avatar.jpg")} />
      </View>
      <View style={styles.topOne}>
        <Avatar
          style={styles.mainAvt}
          source={require("../assets/images/rank1.jpg")}
        />
        <Text style={styles.topOneName}>Hayden Bleasel</Text>
        <Text style={styles.topOnePoint}>10,145 points</Text>
      </View>
      <Layout style={styles.listRank}>
        <List data={data} renderItem={renderItem} />
      </Layout>
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    fontFamily: "poppins-extralight",
    backgroundColor: "#F3F5F9",
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 30,
  },
  navTitle: {
    fontFamily: "poppins-bold",
  },
  icon: {
    width: 25,
    height: 25,
  },
  topOne: {
    alignItems: "center",
  },
  mainAvt: {
    width: 120,
    height: 120,
  },
  topOneName: {
    fontFamily: "poppins-bold",
  },
  topOnePoint: {
    fontFamily: "poppins-extralight",
    fontSize: 10,
  },
  listRank: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 10,
    marginTop: 20,
  },
});
