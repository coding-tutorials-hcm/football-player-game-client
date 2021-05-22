import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Icon, Button } from "@ui-kitten/components";

const BackIcon = (props) => <Icon {...props} name="arrow-back-outline" />;

export default function HeaderComponent(props) {
  if (props.rank == 0) {
    return (
      <Layout style={styles.layout} level="4">
        <Button appearance="ghost" accessoryLeft={BackIcon} />
        <Text category="h4" style={styles.textContent}>
          Football Player
        </Text>
        <Text style={styles.textEasy}>Easy</Text>
      </Layout>
    );
  } else if (props.rank == 1) {
    return (
      <Layout style={styles.layout} level="4">
        <Button appearance="ghost" accessoryLeft={BackIcon} />
        <Text category="h4" style={styles.textContent}>
          Football Player
        </Text>
        <Text style={styles.textNormal}>Normal</Text>
      </Layout>
    );
  }
  return (
    <Layout style={styles.layout} level="4">
      <Button appearance="ghost" accessoryLeft={BackIcon} />
      <Text category="h4" style={styles.textContent}>
        Football Player
      </Text>
      <Text style={styles.textHard}>Hard</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
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
  textContent: {
    fontFamily: "poppins-bold",
    textAlign: "center",
    marginLeft: 30,
    marginRight: 30,
  },
  layout: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
