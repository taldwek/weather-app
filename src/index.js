import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from 'styled-components'
import img from "./assets/images/background.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    text-align: center;
    background-image: url(${img});
    color: white;
  }`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
