import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Navbar from "../src/ui/Navbar";
import AllHikes from "./hikes/pages/AllHikes";
import UserHikes from "./hikes/pages/UserHikes";
import Hikes404 from "../src/shared/pages/404";
import Login from "../src/shared/pages/Login";
import Signup from "../src/shared/pages/SignUp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <AllHikes />
        </Route>
        <Route path="/hikes" exact>
          <UserHikes />
        </Route>
        <Route path="/hikes/:id">
          <UserHikes />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/404">
          <Hikes404 />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;