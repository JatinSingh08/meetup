import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MeetupProvider from "./context/meetup-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MeetupProvider>
      <Router>
        <App />
      </Router>
    </MeetupProvider>
  </React.StrictMode>
);
