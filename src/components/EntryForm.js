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
  			`http://murmuring-scrubland-52560.herokuapp.com/topics/${this.props.topicId}/entries`,
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
  <div class="entry-edit-form-container">
    <form className="editform" onSubmit={this.saveEntry}>
      <fieldset className="vertical">
        <div class="edittools">
           <button type="button" title="see" tabindex="-1">(see: topic)</button>
           <button type="button" title="link to topic title or entry" tabindex="-1">link to topic</button>
           <button type="button" title="smart see" tabindex="-1">*</button>
           <button type="button" title="spoiler sign" tabindex="-1">- spoiler -</button>
           <button type="button" title="web link" tabindex="-1">http://</button>
        </div>
        <textarea class="edittextbox with-helpers track-changes" cols="80" id="editbox" name="body" placeholder="Entry" rows="10"
        onChange={(e) => this.setState({ body: e.target.value })} />

      </fieldset>

      <button className="button" type="submit">Submit</button>

    </form>
    </div>
}

export default EntryForm;
