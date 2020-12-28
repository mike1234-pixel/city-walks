import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers/index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const store = createStore(reducer);
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
