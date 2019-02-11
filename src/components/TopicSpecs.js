import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Entry from './Entry'

export default class TopicSpecs extends Component {
	state = {
		id: '',
		title: '',
		entries: [],
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

	favIconClass = () =>
		this.state.fav
			? 'right floated like icon active'
			: 'right floated like icon';

	toggleFav = () => {
		this.props.toggleFav(this.state.id);
		this.setState({ fav: !this.state.fav });
	};

	render() {
		console.log(this.state.entries, "inside the render")
		return (
			<div className="ui fluid card">
				<div className="content">
					<i className={this.favIconClass()} onClick={this.toggleFav} />
					<div className="header">{this.state.title}</div>
					<div className="description">
						<i className="triangle right icon" />
						{ this.state.entries ? this.generateEntries() : null}

					</div>
				</div>
				</div>
		);
	}


}
