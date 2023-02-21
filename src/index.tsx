import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./style/GlobalStyle";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
