import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/ui/navbar";

import Shoes from "./layouts/shoes";
import Login from "./layouts/login";
import Main from "./layouts/main";

import "./scss/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/shoes/:shoeId?" component={Shoes} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
