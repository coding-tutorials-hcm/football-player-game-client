import "react-native-gesture-handler";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import React, { useEffect, useState } from "react";

import Main from "./screens/MainScreen";

import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.default.apps.length) {
  firebase.default.initializeApp(firebaseConfig);
} else {
  firebase.default.app();
}

const store = ConfigureStore();

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    firebase.default
      .auth()
      .onAuthStateChanged((user) =>
        user ? setIsLogin(true) : setIsLogin(false)
      );
  });
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <Main />
        </Provider>
      </ApplicationProvider>
    </>
  );
}
