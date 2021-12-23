import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import store from "./redux/store";
import { Provider } from "react-redux";

const theme = {
  colors: {
    darkGrey: "rgba(0, 0, 0, 0.8)",
    lightGrey: "rgba(0, 0, 0, 0.06)",
  },
};

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
