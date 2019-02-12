import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header'
import PageContainer from './components/PageContainer'
import SignUp from './components/SignUp'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {

  state = {
    user: localStorage.getItem("username")
  }

  updateUser = (user) => {
    this.setState({ user: user })
  }

  logout = () => {
    this.setState({ user: null })
    localStorage.clear()
  }

  render() {
    return (
      <div id="shaked-canvas-div">

      <Header logout={this.logout} />
      <Switch>
      <Route path="/Contact" component={Contact} />
        <Route path="/signup" component={SignUp} />

        <Route path="/login" render={() => {
            return <Login updateUser={this.updateUser} />
        }} />
        <Route path="/" component={PageContainer} />
      </Switch>
      <Footer />
      </div>
    );
  }
}


export default App;
