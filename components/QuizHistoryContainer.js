import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import SelectComponent from "../components/SelectComponent";

import { connect } from "react-redux";
import { updateUser, fetchUser } from "../redux/ActionCreators";

import InputComponent from "./InputComponent";
import HeaderComponent from "./HeaderComponent";
import { Button, Layout, Spinner } from "@ui-kitten/components";

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    test: state.test,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchQuestions(id)),
  updateUser: (id, data) => dispatch(fetchUsers(id, data)),
});

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

function QuizContainer(props) {
  const [test, setTest] = useState({});
  const [offsetX, setOffsetX] = useState(0);
  const [scroll, setScroll] = useState(null);
  const [buttonFlag, setButtonFlag] = useState(false);
  const [timeStart, setTimeStart] = useState(Date.now());

  useEffect(() => {
    if (props.test.test.data) {
      setTest(props.test.test.data);
    }
  });

  if (test.questions) {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.layout}>
          <HeaderComponent rank={test.rank} navigation={props.navigation} />
          <ScrollView>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onScroll={(event) => {
                setOffsetX(event.nativeEvent.contentOffset.x);
                setButtonFlag(
                  event.nativeEvent.contentSize.width - 2 * screenWidth <
                    offsetX
                    ? true
                    : false
                );
              }}
              ref={(node) => setScroll(node)}
            >
              {test.questions.map((prop, key) => {
                if (prop.type == 0) {
                  return (
                    <View
                      key={key}
                      style={{
                        width: screenWidth,
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
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <InputComponent data={prop} offset={offsetX} />
                  </View>
                );
              })}
            </ScrollView>
            <Layout
              level="4"
              style={{
                width: screenWidth,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                style={styles.next}
                onPress={() => {
                  if (buttonFlag) {
                    alert("OK");
                  }
                  scroll.scrollTo({ x: offsetX + screenWidth });
                }}
              >
                {buttonFlag ? "Finish" : "Next"}
              </Button>
            </Layout>
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
  next: {
    width: screenWidth - 40,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
