import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Error = (props) => {
	return (
		<Hero>
			<Banner title="404" subTitle="page not found">
				<Link to="/" className="btn-primary">
					Return Home
				</Link>
			</Banner>
		</Hero>
	);
};

Error.propTypes = {};

export default Error;
