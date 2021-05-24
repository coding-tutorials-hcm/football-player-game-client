import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Layout, Text, Avatar, Card, Icon } from "@ui-kitten/components";

import { fetchTest } from "../redux/ActionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  fetchTest: (rank) => dispatch(fetchTest(rank)),
});

function Quiz(props) {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.layout} level="4">
        <View style={styles.nav}>
          <Icon style={styles.icon} name="arrow-ios-back-outline" />
          <Text style={styles.navTitle} category="h4">
            Quiz
          </Text>
          <Avatar
            size="small"
            source={require("../assets/images/avatar.jpg")}
          />
        </View>
        <View style={styles.item}>
          <Text category="h5" style={styles.title}>
            EASY
          </Text>
          <Card
            style={(styles.card, styles.cardEasy)}
            onPress={() => {
              props.fetchTest(0);
              return props.navigation.navigate("QuizContainer");
            }}
          >
            <View style={styles.cardView}>
              <Text style={styles.textEasy}>Easy</Text>
              <Text style={styles.textContent} category="h5">
                Football Player
              </Text>
              <Text style={styles.textQuiz}>10 quiz</Text>
            </View>
          </Card>
        </View>
        <View style={styles.item}>
          <Text category="h5" style={styles.title}>
            NORMAL
          </Text>
          <Card
            style={(styles.card, styles.cardNormal)}
            onPress={() => {
              props.fetchTest(1);
              return props.navigation.navigate("QuizContainer");
            }}
          >
            <View style={styles.cardView}>
              <Text style={styles.textNormal}>Normal</Text>
              <Text style={styles.textContent} category="h5">
                Football Player
              </Text>
              <Text style={styles.textQuiz}>10 quiz</Text>
            </View>
          </Card>
        </View>
        <View style={styles.item}>
          <Text category="h5" style={styles.title}>
            HARD
          </Text>
          <Card
            style={(styles.card, styles.cardHard)}
            onPress={() => {
              props.fetchTest(2);
              return props.navigation.navigate("QuizContainer");
            }}
          >
            <View style={styles.cardView}>
              <Text style={styles.textHard}>Hard</Text>
              <Text style={styles.textContent} category="h5">
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
  },
  layout: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    textDecorationLine: "underline",
    marginTop: 10,
    fontFamily: "poppins-bold",
    color: "#455264",
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
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    paddingTop: 20,
  },
  navTitle: {
    fontFamily: "poppins-bold",
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default connect(null, mapDispatchToProps)(Quiz);
