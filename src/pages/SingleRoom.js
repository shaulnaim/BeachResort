import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { RoomContext } from '../context';
import { Link } from 'react-router-dom';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
	constructor(props) {
		super(props);
		const { slug } = this.props.match.params;

		this.state = {
			slug,
			defaultBcg
		};
	}

	static contextType = RoomContext;

	render() {
		const { getRoom } = this.context;
		const room = getRoom(this.state.slug);

		if (!room) {
			return (
				<div className="error">
					<h3>No such room ... :( </h3>
					<Link to="/rooms" className="btn-primary">
						Back to rooms
					</Link>
				</div>
			);
		}
		const { name, description, capacity, size, price, extras, breafast, pets, images } = room;
		return (
			<StyledHero img={images[0] || this.state.defaultBcg}>
				<Banner title={`${name} room`}>
					<Link to="/rooms" className="btn-primary">
						Back To rooms
					</Link>
				</Banner>
			</StyledHero>
		);
	}
}
