import React from "react";
import { StyleSheet } from "react-native";
import { Text, Icon, Layout, Button } from "@ui-kitten/components";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

import { connect } from "react-redux";

function Finish(props) {
  return (
    <Layout style={styles.container} level="4">
      <Layout style={styles.layout} level="4">
        <Icon name="checkmark-outline" style={styles.icon} />
        <Text category="h3">
          Your point:{" "}
          {
            props.user.user.data.testExamHistory[
              props.user.user.data.testExamHistory.length - 1
            ].point
          }
        </Text>
        <Button onPress={() => props.navigation.navigate("Quiz")}>
          Go Home
        </Button>
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
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default connect(mapStateToProps)(Finish);
