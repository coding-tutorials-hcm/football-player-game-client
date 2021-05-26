import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, View, TextInput,ScrollView } from "react-native";
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

  const [text, onChangeText] = React.useState(null);

  return (
    <Layout style={styles.container} level="4">
      <ScrollView  contentContainerStyle={styles.scrollView}>
      <View style={styles.layout} >
        <Image style={styles.bgImg}  source={require("../assets/images/logo.png")} />
      </View>
      <View style={styles.paddingText}>
        <Text category="h5" style={styles.textGray}>
          You can learn everything{" "}
        </Text>
        <Text style={styles.textGray} category="h5">
          <Text category="h5" style={styles.textBlack}>
            fast
          </Text>{" "}
          and{" "}
          <Text category="h5" style={styles.textBlack}>
            easily
          </Text>{" "}
          with{" "}
        </Text>
        <Text category="h5" style={styles.textBlue}>
          F-Quiz
        </Text>
      </View>
      
        <SafeAreaView>
          <TextInput
            style={styles.input}
            placeholder="Email"

          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
        </SafeAreaView>

          <Button
          style={styles.button}
          status='info'
          >
          Login
        </Button>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
  },
  layout: {
    marginTop:50,
    justifyContent: "center",
    alignItems: "center",
    
  },
  bgImg:{
    width: 300,
    height: 310

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:10
  },
  button: {
    marginTop: 10,
    backgroundColor: "#3988E8",
    color: '#ffffff',
    borderColor:"#3988E8",
  },
  input: {
    height: 45,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    paddingLeft:5
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
