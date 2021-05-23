import React, { useState } from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { Card, Layout, Text, Input, Button } from "@ui-kitten/components";
import HeaderComponent from "./HeaderComponent";
import { baseUrl } from "../shared/baseUrl";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

export default function InputComponent(props) {
  const [value, setValue] = useState("");
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
        <Input
          placeholder="Place your Text"
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
          style={styles.input}
        />
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
  input: {
    marginTop: 30,
  },
  next: {
    marginTop: 30,
    width: screenWidth - 40,
  },
});
