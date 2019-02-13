import React, { Component } from 'react';
import Entry from './Entry'
import EntryForm from './EntryForm'

export default class TopicSpecs extends Component {
	state = {
		id: '',
		title: ''
	};

	componentDidMount() {
		fetch(
			`http://localhost:3000/topics/${this.props.match.params.id}`
		)
			.then(res => res.json())
			.then(topic =>

				this.setState({
					id: topic.id,
					title: topic.title,
					entries: topic.entries
				})
			);
	}

	generateEntries = () => {
		return this.state.entries.map(e => <Entry key={e.id} entry={e} />);
	}

	addEntry = (entry) => {
    let newEntry = this.state.entries.concat(entry)
    this.setState({ entries: newEntry })
  }

	favIconClass = () =>
		this.state.fav
			? 'right floated like icon active'
			: 'right floated like icon';

	toggleFav = () => {
		this.props.toggleFav(this.state.id);
		this.setState({ fav: !this.state.fav });
	};

	render() {
		return (
			<div className="ui fluid card">
				<div className="content">
					<i className={this.favIconClass()} onClick={this.toggleFav} />
					<a href="#">
					 <h1 id="title">{this.state.title}</h1>
					 </a>
					<div className="description">
						<i className="triangle right icon" />
						{ this.state.entries ? this.generateEntries() : null}

					</div>
				</div>
				<EntryForm addEntry={this.addEntry} topicId={this.state.id} />
				</div>
		);
	}


}
