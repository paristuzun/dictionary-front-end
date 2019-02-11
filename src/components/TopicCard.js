import React from 'react';
import { Link } from 'react-router-dom';
import Entry from './Entry'

const TopicCard = props => {
	return (
		<div className="card">
			<Link to={`/topics/${props.topic.id}`}>
				<div className="content">
					<div className="header">{props.topic.title}</div>
					</div>
				</Link>
         {props.topic.entries.map(e => <Entry key={e.id} entry={e} />)}

		</div>
	);
};
export default TopicCard;
