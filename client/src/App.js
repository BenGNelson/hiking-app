import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import UserHikes from "./hikes/pages/UserHikes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <UserHikes />
        </Route>
        <Route path="/hikes" exact>
          <UserHikes />
        </Route>
        <Route path="/hikes/:id">
          <UserHikes />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
