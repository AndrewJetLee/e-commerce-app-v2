import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/es/integration/react'


const theme = {
  colors: {
    darkGrey: "rgba(0, 0, 0, 0.8)",
    lightGrey: "rgba(0, 0, 0, 0.06)",
  },
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
