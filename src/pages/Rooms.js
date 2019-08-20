import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Rooms = (props) => {
	return (
		<Hero hero="roomsHero">
			<Banner title="Our Rooms">
				<Link to="/" className="btn-primary">
					Home
				</Link>
			</Banner>
		</Hero>
	);
};

Rooms.propTypes = {};

export default Rooms;
