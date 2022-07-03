import "antd/dist/antd.variable.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Documentation from "./Documentation";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./global.css";

import { ConfigProvider } from "antd";

ConfigProvider.config({
  theme: {
    primaryColor: "#2f54eb",
  },
});

const Routers = () => {
  return (
    <>
      <HashRouter>
        <App />
      </HashRouter>
      <HashRouter>
        <Documentation />
      </HashRouter>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
