import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Layout, Text, Avatar, Card, List } from "@ui-kitten/components";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const Home = (props) => (
  <View {...props}>
    <Text category="h6">Home</Text>
  </View>
);
const Rank = (props) => (
  <View {...props}>
    <Text category="h6">Rank</Text>
  </View>
);
const Quiz = (props) => (
  <View {...props}>
    <Text category="h6">Quiz</Text>
  </View>
);
const History = (props) => (
  <View {...props}>
    <Text category="h6">History</Text>
  </View>
);
const User = (props) => (
  <View {...props}>
    <Text category="h6">User</Text>
  </View>
);

function Profile(props) {
  return (
    <Layout style={styles.container}>
      <View style={styles.profile}>
        <Avatar
          style={styles.avatar}
          size="giant"
          source={require("../assets/images/avatar.jpg")}
        />
        <Text style={styles.name} status="basic">
          {props.user.user.data.displayName || props.user.user.data.email}
        </Text>
        <Text style={styles.point} status="basic">
          {props.user.user.data.point} points
        </Text>
      </View>

      <View style={styles.userManual}>
        <Text style={styles.quizTitle} status="basic">
          User Manual
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card style={styles.card} header={Home}>
            <Text style={styles.textManual}>
              On the homepage, there is a list of quizzes from easy to difficult
              to challenge each player's knowledge.Players just need to click on
              any set of questions they like to start doing the test.
            </Text>
          </Card>
          <Card style={styles.card} header={Rank}>
            <Text style={styles.textManual}>
              The ranking page shows the top users who have the highest scores, 
              ranked from high to low.Users can view the personal information of the top.
              But this feature will be updated as soon as possible to serve everyone
            </Text>
          </Card>
          <Card style={styles.card} header={Quiz}>
            <Text style={styles.textManual}>
              The quiz page is like the home page, users will choose a set of questions that
              match their knowledge to do.Each set of questions has 10 questions, 
              for easy and medium levels, choose the answer A, B, C, and D, if it is difficult, 
              you must enter the answer.
            </Text>
          </Card>
          <Card style={styles.card} header={History}>
            <Text style={styles.textManual}>
              The history page stores the question sets done each day. 
              Users can review which sentences are true or false
            </Text>
          </Card>
          <Card style={styles.card} header={User}>
            <Text style={styles.textManual}>
              The profile page stores the logged in user avatar, 
              username and total score of quizzes that person has and adds instructions for use 
              at the bottom, if you are a new user, you can read to know how to use the app
            </Text>
          </Card>
        </ScrollView>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "poppins-extralight",
    backgroundColor: "#F3F5F9",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 40,
    width: "100%",
    height: 150,
    backgroundColor: "#ffffff",
  },
  name: {
    fontSize: 14,
  },
  point: {
    fontSize: 10,
  },
  userManual: {
    flex: 1,
    backgroundColor: "#B1C8E8",
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  quizTitle: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  card: {
    marginTop: 10,
  },
  textManual: {
    textAlign: "justify",

  },
});

export default connect(mapStateToProps)(Profile);
