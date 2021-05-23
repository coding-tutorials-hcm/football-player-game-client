import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import SelectComponent from "../components/SelectComponent";

import { connect } from "react-redux";
import InputComponent from "./InputComponent";

import HeaderComponent from "./HeaderComponent";
import { Layout, Spinner } from "@ui-kitten/components";

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    test: state.test,
    users: state.users,
  };
};

function QuizContainer(props) {
  let screenWidth = Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;

  const [test, setTest] = useState({});
  const [offsetX, setOffsetX] = useState();

  useEffect(() => {
    if (props.test.test.data) {
      setTest(props.test.test.data);
    }
  });

  if (test.questions) {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.layout}>
          <HeaderComponent rank={test.rank} />
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => {
              setOffsetX(event.nativeEvent.contentOffset.x);
            }}
          >
            {test.questions.map((prop, key) => {
              if (prop.type == 0) {
                return (
                  <View
                    key={key}
                    style={{
                      width: screenWidth,
                      height: screenHeight,
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <SelectComponent data={prop} offset={offsetX} />
                  </View>
                );
              }
              return (
                <View
                  key={key}
                  style={{
                    width: screenWidth,
                    height: screenHeight,
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <InputComponent data={prop} offset={offsetX} />
                </View>
              );
            })}
          </ScrollView>
        </Layout>
      </Layout>
    );
  }
  return (
    <Layout style={styles.container} level="4">
      <Layout style={styles.layout} level="4">
        <Spinner />
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
});

export default connect(mapStateToProps)(QuizContainer);
