import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    console.log(this.setState);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:4000/api/login", this.state.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <div>
            <label> Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label> Password:</label>
            <input
              type="text"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default Login;
