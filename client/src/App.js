import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

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

const App = () => {
  return (
    <Router>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
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
        <Route path="/404">
          <Hikes404 />
        </Route>
        <Redirect to="/somewhere/else" />
      </Switch>
    </Router>
  );
};

export default App;