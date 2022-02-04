import React from "react";

import { Router, Route, Redirect, Switch, useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";

import Navbar from "../src/shared/Navbar";
import AllHikes from "./hikes/pages/AllHikes";
import UserHikes from "./hikes/pages/UserHikes";
import Hikes404 from "../src/login/pages/404";
import Login from "../src/login/pages/Login";
import Signup from "../src/login/pages/SignUp";
import { AuthContext } from "../src/auth/AuthContext";

const App = () => {
  const historyInstance = createBrowserHistory();

  const storedData = JSON.parse(localStorage.getItem("userData"));
  let token, username, tokenExpiration;
  if (storedData) {
    token = storedData.token;
    username = storedData.username;
    tokenExpiration = storedData.tokenExpiration;
  }

  console.log(token, username);
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <AllHikes />
        </Route>
        <Route path="/my-hikes" exact>
          <UserHikes />
        </Route>
        <Route path="/404" excact>
          <Hikes404 />
        </Route>
        <Redirect to="/404" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <AllHikes />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/404" exact>
          <Hikes404 />
        </Route>
        <Redirect to="/404" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        username: username,
        tokenExpiration: tokenExpiration,
      }}
    >
      <Router history={historyInstance}>
        <Navbar />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
