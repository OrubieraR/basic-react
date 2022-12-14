import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import storage from "./utils/storage";
import { setAuthorizationHeader } from "./api/client";
//import reportWebVitals from "./reportWebVitals";

const accessToken = storage.get("auth");
setAuthorizationHeader(accessToken);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App isInitallyLoged={!!accessToken} />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
