import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../services/Backend';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    login(this.state)
    .then(payload => {
      localStorage.setItem("token", payload.token)
  
      localStorage.setItem("username", payload.username)
      this.props.updateUser(payload.username)
      this.props.history.push("/")
    })
  }

  render() {
    console.log(this.props)
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username"
            onChange={(e) => this.setState({ username: e.target.value })} />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })} />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }

}

const LoginWithRouter = withRouter(Login)

export default LoginWithRouter;
