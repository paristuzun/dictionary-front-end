import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
