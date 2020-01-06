import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
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
		const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
		const [mainImg,...moreImages] = images;
		return (
			<> 
			<StyledHero img={mainImg || this.state.defaultBcg}>
				<Banner title={`${name} room`}>
					<Link to="/rooms" className="btn-primary">
						Back To rooms
					</Link>
				</Banner>
			</StyledHero>
			<section className="single-room">
				<div className="single-room-images">
					{moreImages.map((item,index) => {
						return <img key={index} src={item} alt={name}/>
					})}
				</div>
				<div className="single-room-info">
					<article className="desc">
						<h3>details</h3>
						<p>{description}</p>
					</article>
					<article className="info">
						<h3>info</h3>
						<h6>price: ${price}</h6>
						<h6>size: ${size} SQFT</h6>
						<h6>max capacity: {
							capacity > 1 ? `${capacity} people` : `${capacity} person`
						}
						</h6>
						<h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
					    <h6>{breakfast && "free breakfast included"}</h6>
					</article>
				</div>
			</section>
			<section className="room-extras">
				<h6>extras</h6>
				<ul className="extras">
				{extras.map((item,index) => {
					return <li key={index}> - {item} </li>
				})}
				</ul>
			</section>
			</>
		);
	}
}
