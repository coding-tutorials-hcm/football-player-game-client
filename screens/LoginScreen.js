import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import {
  Layout,
  Text,
  Button,
  Icon,
  Input,
  Spinner,
} from "@ui-kitten/components";

import { fetchUser, createUser, login } from "../redux/ActionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  createUser: (data) => dispatch(createUser(data)),
  fetchUser: (id) => dispatch(fetchUser(id)),
});

const GoogleIcon = (props) => <Icon {...props} name="google-outline" />;

const FacebookIcon = (props) => <Icon {...props} name="facebook-outline" />;

function Login(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {});

  const submitLoginForm = async (data) => {
    const user = await login(data);

    if (user.data.uid) {
      props.createUser({
        displayName: user.data.displayName,
        email: user.data.email,
        _id: user.data.uid,
        photoURL: user.data.photoURL,
        rank: 0,
        point: 0,
        timeCreate: user.data.createdAt,
        testExamHistory: [],
      });
      props.fetchUser(user.data.uid);
    }
  };

  const goToLogin = (data) => {
    submitLoginForm(data);
  };

  if (isLoading) {
    return (
      <Layout style={styles.containerLoading} level="4">
        <Layout style={styles.layoutLoading} level="4">
          <Spinner />
        </Layout>
      </Layout>
    );
  }

  return (
    <Layout style={styles.container} level="4">
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.layout}>
          <Image
            style={styles.bgImg}
            source={require("../assets/images/logo.png")}
          />
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
          <Input
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(nextValue) => setEmail(nextValue)}
          />
          <Input
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(nextValue) => setPassword(nextValue)}
          />
        </SafeAreaView>

        <Button
          style={styles.button}
          onPress={() => {
            setIsLoading(true);
            return goToLogin({ email, password });
          }}
          disabled={email == null && password == null ? true : false}
        >
          Login
        </Button>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    flexDirection: "column",
  },
  layoutLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
  },
  layout: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImg: {
    width: 300,
    height: 310,
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
    marginTop: 10,
  },
  button: {
    marginTop: 10,
  },
  input: {
    height: 45,
    marginTop: 15,
    backgroundColor: "#ffffff",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default connect(null, mapDispatchToProps)(Login);
