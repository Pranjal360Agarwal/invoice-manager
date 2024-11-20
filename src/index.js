import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/appSlice";
import App from "./App";
import "./index.css";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
