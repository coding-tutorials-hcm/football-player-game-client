import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Card,
  Layout,
  Text,
  Radio,
  RadioGroup,
  Divider,
  Button,
} from "@ui-kitten/components";
import HeaderComponent from "./HeaderComponent";

export default function SelectComponent(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Layout style={styles.container}>
      <Layout style={styles.layout} level="4">
        <HeaderComponent rank={0} />
        <Card>
          <Image source={require("../assets/images/easy.png")} />
        </Card>
        <Text category="h6" style={styles.question}>
          This footballer is the captain of FC Barcelona . What's his name?
        </Text>
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={(index) => setSelectedIndex(index)}
        >
          <Radio style={styles.radio}>Option 1</Radio>
          <Radio style={styles.radio}>Option 2</Radio>
          <Radio style={styles.radio}>Option 3</Radio>
          <Radio style={styles.radio}>Option 3</Radio>
        </RadioGroup>
        <Button>Next</Button>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  layout: {
    paddingTop: 40,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  question: {
    fontFamily: "poppins-extralight",
  },
  input: {
    marginTop: 30,
  },
  radio: {
    padding: 10,
    width: 300,
    backgroundColor: "#FFF",
  },
});
