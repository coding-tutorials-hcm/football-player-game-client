import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import SelectComponent from "../components/SelectComponent";

import { connect } from "react-redux";
import { updateUser, fetchUser } from "../redux/ActionCreators";

import InputComponent from "./InputComponent";
import HeaderComponent from "./HeaderComponent";
import { Button, Layout, Spinner, Icon } from "@ui-kitten/components";
// import Sound from "react-native-sound";
import { Audio } from "expo-av";

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    test: state.test,
    user: state.user,
    users: state.users,
  };
};

const compare = (array, value) => {
  const temp = [...array];

  temp[value.index] = value.answer;

  return temp;
};

const checkPoint = (test, answers) => {
  let point = 0;
  for (const [index, answer] of answers.entries()) {
    if (test[index]) {
      if (test[index].answer.Answer[answer].correct) {
        point += 10;
      }
    }
  }
  return point;
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (id, data) => dispatch(updateUser(id, data)),
});

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

function QuizContainer(props) {
  const [test, setTest] = useState({});
  const [offsetX, setOffsetX] = useState(0);
  const [scroll, setScroll] = useState(null);
  const [buttonFlag, setButtonFlag] = useState(false);
  const [timeStart, setTimeStart] = useState(Date.now());
  const [timeEnd, setTimeEnd] = useState(0);

  const [user, setUser] = useState({});
  const [answers, setAnswers] = useState([]);

  let [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/sound.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setSound(null);
    }
  }

  useEffect(() => {
    if (props.test.test.data) {
      setTest(props.test.test.data);
    }

    if (props.user.user.data) {
      setUser(props.user.user.data);
    }
  });

  const callback = (answer) => {
    setAnswers(compare(answers, answer));
  };

  const submitTest = (user) => {
    if (answers.length == 10) {
      if (user.testExamHistory) {
        user.testExamHistory.push({
          timeStart: timeStart,
          timeEnd: timeEnd,
          answers: answers,
          testExam: test,
          point: checkPoint(test, answers),
        });

        props.updateUser(user._id, user);
        pauseSound();
        props.navigation.navigate("Finish");
      }
    }
  };

  if (test.questions) {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.layout} level="4">
          <HeaderComponent rank={test.rank} navigation={props.navigation} />
          <ScrollView>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
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
                      <SelectComponent
                        data={prop}
                        offset={offsetX}
                        callback={callback}
                        keyIndex={key}
                      />
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
                    <InputComponent
                      data={prop}
                      offset={offsetX}
                      callback={callback}
                      keyIndex={key}
                    />
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
                    setTimeEnd(Date.now());
                    pauseSound();
                    submitTest(user);
                  }

                  if (!sound) {
                    playSound();
                  }
                  scroll.scrollTo({ x: offsetX + screenWidth });
                }}
              >
                {buttonFlag ? "Finish" : "Next"}
              </Button>
              {sound ? (
                <TouchableOpacity onPress={() => pauseSound()}>
                  <Icon name="volume-up-outline" style={styles.icon} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => playSound()}>
                  <Icon name="volume-mute-outline" style={styles.icon} />
                </TouchableOpacity>
              )}
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
  icon: {
    marginTop: 10,
    width: 30,
    height: 30,
  },
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
