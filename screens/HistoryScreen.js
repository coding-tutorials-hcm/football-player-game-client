import React from "react";
import { View, StyleSheet } from "react-native";
import SelectComponent from "../components/SelectComponent";
import { Layout, Text, Avatar, Icon, Card } from "@ui-kitten/components";
export default function History() {
  return (
    <Layout style={styles.container}>
      <View style={styles.nav}>
        <Icon style={styles.icon} name="arrow-ios-back-outline" />
        <Text style={styles.navTitle} category="h4">
          History
        </Text>
        <Avatar size="small" source={require("../assets/images/avatar.jpg")} />
      </View>
      <Layout style={styles.listQuiz}>
        <Text style={styles.date}>-Tuesday, 4 May 2021-</Text>
        <View style={styles.item}>
          <Card style={(styles.card, styles.cardEasy)}>
            <View style={styles.cardView}>
              <Text style={styles.textEasy}>Easy</Text>
              <Text style={styles.textContent} category="h6">
                Football Player
              </Text>
              <Text style={styles.textQuiz}>10 quiz</Text>
            </View>
          </Card>
        </View>
        <View style={styles.item}>
          <Card style={(styles.card, styles.cardHard)}>
            <View style={styles.cardView}>
              <Text style={styles.textHard}>Hard</Text>
              <Text style={styles.textContent} category="h6">
                Football Player
              </Text>
              <Text style={styles.textQuiz}>10 quiz</Text>
            </View>
          </Card>
        </View>
      </Layout>
      <Layout style={styles.listQuiz}>
        <Text style={styles.date}>-Tuesday, 3 May 2021-</Text>
        <View style={styles.item}>
          <Card style={(styles.card, styles.cardNormal)}>
            <View style={styles.cardView}>
              <Text style={styles.textNormal}>Normal</Text>
              <Text style={styles.textContent} category="h6">
                Football Player
              </Text>
              <Text style={styles.textQuiz}>10 quiz</Text>
            </View>
          </Card>
        </View>
        <View style={styles.item}>
          <Card style={(styles.card, styles.cardHard)}>
            <View style={styles.cardView}>
              <Text style={styles.textHard}>Hard</Text>
              <Text style={styles.textContent} category="h6">
                Football Player
              </Text>
              <Text style={styles.textQuiz}>10 quiz</Text>
            </View>
          </Card>
        </View>
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
  listQuiz: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    backgroundColor: "#F3F5F9",
  },
  card: {
    display: "flex",
    flexDirection: "row",
  },
  item: {
    marginTop: 10,
  },
  textEasy: {
    backgroundColor: "#C1EAF0",
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "poppins-extralight",
    textAlign: "center",
  },
  textNormal: {
    backgroundColor: "#946991",
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "poppins-extralight",
    textAlign: "center",
    color: "#FFFFFF",
  },
  textHard: {
    backgroundColor: "#EEA981",
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "poppins-extralight",
    textAlign: "center",
    color: "#FFFFFF",
  },
  cardEasy: {
    backgroundColor: "#E3E0F3",
  },
  cardNormal: {
    backgroundColor: "#B9EBF3",
  },
  cardHard: {
    backgroundColor: "#B6E7DA",
  },
  cardView: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  textQuiz: {
    fontFamily: "poppins-extralight",
    marginTop: 10,
  },
  textContent: {
    fontFamily: "poppins-bold",
    marginTop: 10,
  },
});
