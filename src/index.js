import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode style={{ margin: 0 }}>
    <App />
  </StrictMode>,
  rootElement
);
