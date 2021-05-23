import React, { useState } from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
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
import { baseUrl } from "../shared/baseUrl";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

export default function SelectComponent(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Layout style={styles.container}>
      <Layout style={styles.layout} level="4">
        <Image
          source={{
            uri: `${baseUrl + props.data["image_url"]}`,
          }}
          style={{
            width: screenWidth - 40,
            height: 200,
          }}
        />
        <Text category="h6" style={styles.question}>
          {props.data.title}
        </Text>
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={(index) => setSelectedIndex(index)}
        >
          <Radio style={styles.radio}>
            <Text style={styles.radioText}>
              {props.data.answer.Answer[0].answer}
            </Text>
          </Radio>
          <Radio style={styles.radio}>
            <Text style={styles.radioText}>
              {props.data.answer.Answer[1].answer}
            </Text>
          </Radio>
          <Radio style={styles.radio}>
            <Text style={styles.radioText}>
              {props.data.answer.Answer[2].answer}
            </Text>
          </Radio>
          <Radio style={styles.radio}>
            <Text style={styles.radioText}>
              {props.data.answer.Answer[3].answer}
            </Text>
          </Radio>
        </RadioGroup>
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
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  question: {
    width: screenWidth - 40,
    height: 100,
    fontFamily: "poppins-bold",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  next: {
    marginTop: 30,
    width: screenWidth - 40,
  },
  radio: {
    padding: 10,
    width: screenWidth - 40,
    backgroundColor: "#FFF",
  },
  radioText: {
    fontFamily: "poppins-extralight",
  },
});
