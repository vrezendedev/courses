import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./components/reducers";

const container = document.getElementById("root");
const root = createRoot(container);

const store = createStore(reducers);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
