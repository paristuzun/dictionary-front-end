import React from 'react'

const Entry= props => {
	return (
		<div className="card">
       <ul id="entry-item-list" class="home-page-entry-list">
				<div className="content">
				<li>{props.entry.body}</li>

				</div>
     </ul>
		</div>
	);
};
export default Entry;
