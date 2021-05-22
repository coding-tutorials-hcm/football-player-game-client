import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Card, Layout, Text, Input, Button } from "@ui-kitten/components";
import HeaderComponent from "./HeaderComponent";

export default function InputComponent(props) {
  const [value, setValue] = useState("");
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
        <Input
          placeholder="Place your Text"
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
          style={styles.input}
        />
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
});
