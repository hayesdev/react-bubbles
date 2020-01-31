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

        <h3>
          <Link to="/">Click to Login</Link>
        </h3>

        <PrivateRoute path="/protected" component={BubblePage} />
        <Route exact path="/" component={Login} />
        {/* <Route component={Login} /> */}
      </div>
    </Router>
  );
}

export default App;
