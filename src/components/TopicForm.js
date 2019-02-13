import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class TopicForm extends React.Component {
  state = {
  title: '',
  entry: '',
  category_id: []
  // redirect: false
  }

  saveTopic = (event) => {
    console.log("saving topic")
    event.preventDefault()
    fetch("https://murmuring-scrubland-52560.herokuapp.com/topics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": localStorage.getItem("token")

      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(topic => this.props.addTopic(topic))
    // .then(() => this.props.history.push("/"))
  }

  

   render = () =>
    <form className="form" onSubmit={this.saveTopic}>
      <div class="field">
        <label>Topic Title</label>
        <input type="text" name="title" placeholder="Topic title"
          onChange={(e) => this.setState({ title: e.target.value })} />

      </div>

      <button className="button" type="submit">Submit</button>

    </form>
}

export default TopicForm;
