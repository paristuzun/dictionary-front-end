import React from 'react';

class TopicForm extends React.Component {
  state = {
  title: '',
  entry: ''
  }

  saveTopic = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/topics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": localStorage.getItem("token")

      },
      // body: JSON.stringify(this.state)
      body: JSON.stringify({
        title: this.state.title.trim(),
        entry: this.state.entry.trim()
      })
    }).then(res => res.json())
    .then(topic => this.props.addTopic(topic))
  }

  render = () =>
    <form className="form" onSubmit={this.saveTopic}>
      <div class="field">
        <label>Topic Title</label>
        <input type="text" name="title" placeholder="Topic title"
          onChange={(e) => this.setState({ title: e.target.value })} />
      </div>
      <div class="field">
        <label>Entry</label>
        <input type="text" name="entry" placeholder="Entry"
          onChange={(e) => this.setState({ entry: e.target.value })} />
      </div>
      <button className="button" type="submit">Submit</button>

    </form>
}

export default TopicForm;
