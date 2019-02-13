import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class TopicForm extends React.Component {
  state = {
  title: '',
  entry: '',
  category_id: []
  }

  saveTopic = (event) => {
    console.log("saving topic")
    event.preventDefault()
    fetch("http://localhost:3000/topics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": localStorage.getItem("token")

      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(topic => {
      this.props.addTopic(topic);
      return topic
    })
    .then((topic) => this.props.routeProps.history.push(`/topics/${topic.id}`))
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
