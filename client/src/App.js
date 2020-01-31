import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 

        */}
        <h1>Welcome to Bubbles!</h1>
        <Link to="/login">
          <h2>Click to Login</h2>
        </Link>

        <PrivateRoute path="/protected" component={BubblePage} />
        <Route exact path="/login" component={Login} />
        {/* <Route component={Login} /> */}
      </div>
    </Router>
  );
}

export default App;
