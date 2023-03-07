import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/fonts/CircularSp-Bold-fe1cfc14b7498b187c78fa72fb72d148.woff2";
import "./assets/fonts/CircularSp-Book-4eaffdf96f4c6f984686e93d5d9cb325.woff2";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
