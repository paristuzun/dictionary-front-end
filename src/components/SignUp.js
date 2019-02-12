import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { createUser } from '../services/Backend';

class SignUp extends Component {
  state = {
    username: "",
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    createUser(this.state)
    .then(payload => {
      localStorage.setItem("token", payload.token)
      localStorage.setItem("username", payload.username)
      this.props.history.push("/")
    })
  }

  render() {
    console.log(this.props)
    return (
      <form class="ui form" onSubmit={this.handleSubmit}>
        <div class="field">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username"
            onChange={(e) => this.setState({ username: e.target.value })} />
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })} />
        </div>
        <button class="ui button" type="submit">Submit</button>
      </form>
    )
  }

}

export default withRouter(SignUp);
