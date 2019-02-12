import React from 'react';

class EntryForm extends React.Component {
  state = {
  body: '',
  topic_id: '',
  created_at: '',
  votes_count: ''
  }

  saveEntry= (event) => {
    event.preventDefault()
    fetch(
  			`http://localhost:3000/topics/${this.props.topicId}/entries`,
  		 {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": localStorage.getItem("token")

      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(entry => this.props.addEntry(entry))

  }

  render = () =>
    <form className="form" onSubmit={this.saveEntry}>
      <div className="field">
        <label>Entry</label>
        <textarea name="body" placeholder="Entry"
          onChange={(e) => this.setState({ body: e.target.value })} />
      </div>

      <button className="button" type="submit">Submit</button>

    </form>
}

export default EntryForm;
