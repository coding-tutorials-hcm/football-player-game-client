import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  Layout,
  Text,
  ViewPager,
  Avatar,
  Divider,
  Card,
} from "@ui-kitten/components";

export default function Quiz() {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.layout} level="4">
        <View style={styles.header}>
          <Text style={styles.title} category="h4">
            UI Kitten
          </Text>
          <Avatar size="giant" source={require("../assets/icon.png")} />
        </View>
        <View style={styles.item}>
          <Text category="h5" style={styles.title}>
            EASY
          </Text>
          <Card style={(styles.card, styles.cardEasy)}>
            <View style={styles.cardView}>
              <Text style={styles.textEasy}>Easy</Text>
              <Text style={styles.textContent} category="h5">
                Football Player
              </Text>
              <Text style={styles.textQuiz}>10 quiz</Text>
            </View>
            {/* <Image
              style={styles.image}
              source={require("../assets/images/easy.png")}
            /> */}
          </Card>
        </View>
        <View style={styles.item}>
          <Text category="h5" style={styles.title}>
            NORMAL
          </Text>
          <Card style={(styles.card, styles.cardNormal)}>
            <View style={styles.cardView}>
              <Text style={styles.textNormal}>Normal</Text>
              <Text style={styles.textContent} category="h5">
                Football Player
              </Text>
              <Text style={styles.textQuiz}>10 quiz</Text>
            </View>
            {/* <Image
              style={styles.image}
              source={require("../assets/images/normal.png")}
            /> */}
          </Card>
        </View>
        <View style={styles.item}>
          <Text category="h5" style={styles.title}>
            HARD
          </Text>
          <Card style={(styles.card, styles.cardHard)}>
            <View style={styles.cardView}>
              <Text style={styles.textHard}>Hard</Text>
              <Text style={styles.textContent} category="h5">
                Football Player
              </Text>
              <Text style={styles.textQuiz}>10 quiz</Text>
            </View>
            {/* <Image
              style={styles.image}
              source={require("../assets/images/hard.png")}
            /> */}
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
    padding: 20,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
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
});
