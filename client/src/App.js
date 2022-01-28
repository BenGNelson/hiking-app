import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Hikes from "./hikes/pages/Hikes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Hikes />
        </Route>
        <Route path="/hikes" exact>
          <Hikes />
        </Route>
        <Route path="/hikes/:id">
          <Hikes />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
