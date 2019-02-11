import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header'
import PageContainer from './components/PageContainer'
import SignUp from './components/SignUp'
import Footer from './components/Footer'

class App extends Component {

  state = {
    user: localStorage.getItem("name")
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
      <div className="ui container">
      <Header />
      <Switch>
      // about
      // contact
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" component={PageContainer} />
      </Switch>
      <Footer />
      </div>
    );
  }
}


export default App;
