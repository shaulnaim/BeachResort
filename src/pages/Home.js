import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {FeaturedRooms} from '../components/FeaturedRooms';

const Home = (props) => {
	return (
		<>
		<Hero>
			<Banner title="luxury rooms" subTitle="delux rooms starting at $500">
				<Link to="/rooms" className="btn-primary">
					Our Rooms
				</Link>
			</Banner>
		</Hero>
		<Services/>
		<FeaturedRooms/>
		</>
	);
};

export default Home;
