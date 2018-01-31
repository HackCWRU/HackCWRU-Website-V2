import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel} from 'react-bootstrap';
import '../Assets/carousel.css';


class CarouselComponent extends React.Component {
	constructor(...args) {
		super(...args);


		this.state = {
			index: 0,
			direction: 'next',
			interval: 2000
		};
	}

	render() {
		return (
			<section className="carousel">
			<div display={"inline-block"} width={"70%"}>
				<Carousel
					onSelect={this.handleSelect}
					interval={this.state.interval}
					width={"80%"}
				>
						<Carousel.Item>
						<center> <img  alt="900x600" src={require('../Assets/scroll-pictures/1.jpg')} /></center>
							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/2.jpg')} /></center>

						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/3.jpg')} /></center>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/4.jpg')} /></center>
							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/5.jpg')} /></center>
							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/6.jpg')} /></center>
							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/7.jpg')} /></center>
							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/8.jpg')} /></center>
							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/9.jpg')} /></center>
							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/10.jpg')} /></center>
							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/11.jpg')} /></center>
							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/12.jpg')} /></center>
							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/13.jpg')} /></center>
							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>

					</Carousel>
				</div>
				</section>
			);
  	}

}

export default CarouselComponent;
