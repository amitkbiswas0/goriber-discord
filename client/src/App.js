import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Login from "./components/public/Login";
import Signup from "./components/public/Signup";
import Home from "./components/public/Home";
import Main from "./components/private/Main";
import ProtectedRoute from "./components/public/ProtectedRoute";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <ProtectedRoute exact path="/app">
          <Main />
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
