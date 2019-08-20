import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaShuttleVan, FaBeer, FaHiking } from 'react-icons/fa';

export default class Services extends Component {
	
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: 'free cocktail',
				info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae?'
			},
			{
				icon: <FaHiking />,
				title: 'Endless Hiking',
				info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae?'
			},
			{
				icon: <FaShuttleVan />,
				title: 'free Shuttle',
				info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae?'
			},
			{
				icon: <FaBeer />,
				title: 'stronges beer',
				info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae?'
			}
		]
	};

	render() {
		return (
			<section className="services">
				<Title title="Services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
