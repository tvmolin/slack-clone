import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "./app/components/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
