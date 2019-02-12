import React from 'react'

const Entry= props => {
	return (
		<div className="card">

				<div className="content">
				{props.entry.body}

				</div>

		</div>
	);
};
export default Entry;
