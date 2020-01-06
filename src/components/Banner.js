import React from 'react';

export default ({ children, title, subTitle = '' }) => {
	return (
		<div className="banner">
			<h1>{title}</h1>
			<div />
			<p>{subTitle}</p>
			{children}
		</div>
	);
}
