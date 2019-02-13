import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class TopicForm extends React.Component {
  state = {
  title: '',
  entry: '',
  category_id: [],
  redirect: false
  }

  saveTopic = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/topics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": localStorage.getItem("token")

      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(topic => this.props.addTopic(topic))
  }

   setRedirect = () => {
     this.setState({
       redirect: true
     })
   }

   renderRedirect = () => {
     if (this.state.redirect) {
       return <Redirect to='/' />
     }
   }

   render = () =>
    <form className="form" onSubmit={this.saveTopic}>
      <div class="field">
        <label>Topic Title</label>
        <input type="text" name="title" placeholder="Topic title"
          onChange={(e) => this.setState({ title: e.target.value })} />
        {this.renderRedirect()}
      </div>

      <button className="button" type="submit" onClick={this.setRedirect}>Submit</button>

    </form>
}

export default TopicForm;
