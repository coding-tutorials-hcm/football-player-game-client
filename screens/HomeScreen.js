import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { Layout, Text, Avatar, Card } from "@ui-kitten/components";

import { fetchTest } from "../redux/ActionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  fetchTest: (rank) => dispatch(fetchTest(rank)),
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

function Home(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (props.user.user.data) {
      setUser(props.user.user.data);
    }
  });
  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Avatar size="giant" source={require("../assets/images/avatar.jpg")} />
        <Text style={styles.text} status="basic">
          Hi, {user.email ? user.email : "My Friend"}
        </Text>
        <Text style={styles.title} status="basic">
          What do you want to learn today?
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.quizTitle} status="basic">
          Choose your quiz
        </Text>
        <View style={styles.item}>
          <Card
            style={(styles.card, styles.cardEasy)}
            onPress={() => {
              props.fetchTest(0);
              return props.navigation.navigate("QuizContainer");
            }}
          >
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
          <Card
            style={(styles.card, styles.cardNormal)}
            onPress={() => {
              props.fetchTest(1);
              return props.navigation.navigate("QuizContainer");
            }}
          >
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
          <Card
            style={(styles.card, styles.cardHard)}
            onPress={() => {
              props.fetchTest(2);
              return props.navigation.navigate("QuizContainer");
            }}
          >
            <View style={styles.cardView}>
              <Text style={styles.textHard}>Hard</Text>
              <Text style={styles.textContent} category="h6">
                Football Player
              </Text>
              <Text style={styles.textQuiz}>10 quiz</Text>
            </View>
          </Card>
        </View>
      </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 20,
    marginTop: 40,
  },
  text: {
    margin: 10,
    color: "#455264",
  },
  title: {
    margin: 5,
    paddingTop: 10,
    fontSize: 30,
    color: "#455264",
    fontWeight: "500",
  },
  main: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    flex: 1,
    padding: 20,
  },
  quizTitle: {
    fontSize: 20,
    color: "#455264",
    fontWeight: "bold",
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
  imgEasy: {
    width: 50,
    height: 50,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
