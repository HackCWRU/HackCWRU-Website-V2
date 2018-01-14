import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel} from 'react-bootstrap';

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
			<div display={"inline-block"} width={"70%"}>
				<Carousel
					onSelect={this.handleSelect}
					interval={this.state.interval}
					width={"80%"}
				>
						<Carousel.Item>
						<center> <img  alt="900x600" src={require('../Assets/scroll-pictures/1.jpg')} /></center>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/2.jpg')} /></center>
							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<center><img  alt="900x600" src={require('../Assets/scroll-pictures/3.jpg')} /></center>
							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl consectetur.
								</p>
							</Carousel.Caption>
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
			);
  	}

}

export default CarouselComponent;
