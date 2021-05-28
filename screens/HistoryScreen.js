import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Layout,
  Text,
  Avatar,
  Icon,
  Card,
  Spinner,
} from "@ui-kitten/components";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

function History(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    if (props.user.user.data) {
      setUser(props.user.user.data);
    }
  });

  if (user) {
    return (
      <Layout style={styles.container}>
        <View style={styles.nav}>
          <Icon style={styles.icon} name="arrow-ios-back-outline" />
          <Text style={styles.navTitle} category="h4">
            History
          </Text>
          <Avatar
            size="small"
            source={require("../assets/images/avatar.jpg")}
          />
        </View>
        <Layout style={styles.listQuiz}>
          <ScrollView
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            {user.testExamHistory.map((prop, key) => {
              if (prop.testExam.rank == 0) {
                return (
                  <View key={key}>
                    <Text style={styles.date}>
                      -{new Date(prop.timeStart).toLocaleString()}-
                    </Text>
                    <View style={styles.item}>
                      <Card style={(styles.card, styles.cardEasy)}>
                        <View style={styles.cardView}>
                          <Text style={styles.textEasy}>Easy</Text>
                          <Text style={styles.textContent} category="h6">
                            Football Player
                          </Text>
                          <Text style={styles.textQuiz}>
                            {prop.testExam.count} quiz
                          </Text>
                        </View>
                      </Card>
                    </View>
                  </View>
                );
              }

              if (prop.testExam.rank == 2) {
                return (
                  <View key={key}>
                    <Text style={styles.date}>
                      -{new Date(prop.timeStart).toLocaleString()}-
                    </Text>

                    <View style={styles.item}>
                      <Card style={(styles.card, styles.cardHard)}>
                        <View style={styles.cardView}>
                          <Text style={styles.textHard}>Hard</Text>
                          <Text style={styles.textContent} category="h6">
                            Football Player
                          </Text>
                          <Text style={styles.textQuiz}>
                            {prop.testExam.count} quiz
                          </Text>
                        </View>
                      </Card>
                    </View>
                  </View>
                );
              }

              return (
                <View key={key}>
                  <Text style={styles.date}>
                    -{new Date(prop.timeStart).toLocaleString()}-
                  </Text>
                  <View style={styles.item}>
                    <Card style={(styles.card, styles.cardNormal)}>
                      <View style={styles.cardView}>
                        <Text style={styles.textNormal}>Normal</Text>
                        <Text style={styles.textContent} category="h6">
                          Football Player
                        </Text>
                        <Text style={styles.textQuiz}>
                          {prop.testExam.count} quiz
                        </Text>
                      </View>
                    </Card>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </Layout>
      </Layout>
    );
  }

  return (
    <Layout style={styles.containerLoading} level="4">
      <Layout style={styles.layoutLoading} level="4">
        <Spinner />
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    flexDirection: "column",
  },
  layoutLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  date: {
    fontFamily: "poppins-bold",
  },
});

export default connect(mapStateToProps)(History);
