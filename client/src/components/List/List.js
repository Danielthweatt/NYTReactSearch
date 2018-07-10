import React from 'react';

export const List = props => {
	return (
		<div className="row">
			<div className="col-sm-1 col-md-2"></div>
			<div className="col-sm-10 col-md-8">
				<ul className="list-group">
					{props.children}
				</ul>
			</div>
		</div>
	);
};
