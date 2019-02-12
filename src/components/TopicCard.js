import React from 'react';
import { Link } from 'react-router-dom';
import Entry from './Entry'

const TopicCard = props => {
	return (

	<div className="card">
		<Link to={`/topics/${props.topic.id}`}>

			<h1 id="title">{props.topic.title}</h1>

			</Link>
			 {props.topic.entries.map(e => <Entry key={e.id} entry={e} />)}

	</div>
);
};
export default TopicCard;
