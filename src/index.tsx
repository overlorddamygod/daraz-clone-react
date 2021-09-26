import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// @ts-ignore
import App from "./App";
// @ts-ignore
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

