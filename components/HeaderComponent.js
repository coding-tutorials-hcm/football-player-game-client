import React from "react";
import { StyleSheet, Alert, Dimensions } from "react-native";
import { Layout, Text, Icon, Button } from "@ui-kitten/components";

const BackIcon = (props) => <Icon {...props} name="arrow-back-outline" />;

let screenWidth = Dimensions.get("window").width;

export default function HeaderComponent(props) {
  const alertHandler = () => {
    Alert.alert(
      "Are you sure",
      "Do you want to cancel me ?",
      [
        {
          text: "Yes",
          onPress: props.navigation.goBack,
        },
        {
          text: "No",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };
  if (props.rank == 0) {
    return (
      <Layout style={styles.layout} level="1">
        <Button
          appearance="ghost"
          accessoryLeft={BackIcon}
          onPress={alertHandler}
        />
        <Text category="h4" style={styles.textContent}>
          Football Player
        </Text>
        <Text style={styles.textEasy}>Easy</Text>
      </Layout>
    );
  } else if (props.rank == 1) {
    return (
      <Layout style={styles.layout} level="1">
        <Button
          appearance="ghost"
          accessoryLeft={BackIcon}
          onPress={alertHandler}
        />
        <Text category="h4" style={styles.textContent}>
          Football Player
        </Text>
        <Text style={styles.textNormal}>Normal</Text>
      </Layout>
    );
  }
  return (
    <Layout style={styles.layout} level="1">
      <Button
        appearance="ghost"
        accessoryLeft={BackIcon}
        onPress={alertHandler}
      />
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
    paddingTop: 40,
    width: screenWidth,
  },
});
