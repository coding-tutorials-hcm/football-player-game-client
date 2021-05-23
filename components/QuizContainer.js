import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import SelectComponent from "../components/SelectComponent";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    test: state.test,
  };
};

function QuizContainer(props) {
  let screenWidth = Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;

  const [test, SetTest] = useState([]);
  useEffect(() => {
    SetTest(props.test);
    console.log("--------------------------");
    console.log(test);
  });
  return <ScrollView></ScrollView>;
}

export default connect(mapStateToProps, null)(QuizContainer);
