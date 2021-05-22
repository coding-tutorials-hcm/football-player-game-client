import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";

import * as firebase from "firebase";

const GoogleIcon = (props) => <Icon {...props} name="google-outline" />;

const FacebookIcon = (props) => <Icon {...props} name="facebook-outline" />;

async function login() {
  const provider = new firebase.default.auth.FacebookAuthProvider();
  await firebase.default.auth().signInWithPopup(provider);
}

export default function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {});

  return (
    <Layout style={styles.container}>
      <Layout style={styles.layout}>
        <Image source={require("../assets/images/logo.png")} />
      </Layout>
      <View style={styles.paddingText}>
        <Text category="h4" style={styles.textGray}>
          You can learn everything{" "}
        </Text>
        <Text style={styles.textGray} category="h4">
          <Text category="h4" style={styles.textBlack}>
            fast
          </Text>{" "}
          and{" "}
          <Text category="h4" style={styles.textBlack}>
            easily
          </Text>{" "}
          with{" "}
        </Text>
        <Text category="h4" style={styles.textBlue}>
          F-Quiz
        </Text>
      </View>
      <Button
        style={styles.button}
        status="control"
        accessoryLeft={GoogleIcon}
        onPress={() => login()}
      >
        Login with Google
      </Button>
      <Button
        style={styles.button}
        status="control"
        accessoryLeft={FacebookIcon}
        onPress={() => login()}
      >
        Login with Facebook
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
    padding: 15,
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },
  textGray: {
    color: "#455264",
    fontWeight: "normal",
  },
  textBlack: {
    color: "#000000",
  },
  textBlue: {
    color: "#3988E8",
    fontWeight: "bold",
  },
  paddingText: {
    paddingLeft: 30,
    paddingRight: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 10,
  },
});
