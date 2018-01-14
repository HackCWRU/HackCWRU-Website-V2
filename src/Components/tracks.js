import React, { Component } from 'react';
import { Button, Row, Col, Grid } from 'react-bootstrap';

import '../Assets/tracks.css';


class Tracks extends Component {

	constructor(props) {
		super(props);
	}

	render() {
    	return (
				<div className="App">
					<section className="trackSection">
						<Row>
							<Col md="2"></Col>
							<Col md="8"><h2 className="trackHeader">Tracks</h2></Col>
							<Col md="2"></Col>
						</Row>
						<Row>
							<Col md="3">
							</Col>
							<Col md="7">
								<Row margin-top="300px">
									<Col md="2"><img className="title_image" src={require('../Assets/track_fin1.png')}></img></Col>
									<Col md="10">
									<h3 className="trackHeader-fin">FINANCE</h3>
									The Civic track looks at the all levels of connected devices, from local IoT networks to municipal systems and civic datasets. Create a new device for your smart home, or create something that benefits the community.
									</Col>
								</Row>
								<Row margin-top="300px">
									<Col md="2"><img className="title_image" src={require('../Assets/track_civic.png')}></img></Col>
									<Col md="10"
									><h3 className="trackHeader-civic">CIVIC</h3>
									The healthcare track enables hackers to tackle problems relating to medicine, healthcare, and public health. Whether it is using public health data to analyze population wellness or using mobile technology to improve patient quality of and access to care, there has never been a better opportunity to match engineering solutions with real healthcare problems. If your background is in medicine or public health, partner with an engineer and inform the science behind your project!
									</Col>
								</Row>
								<Row>
									<Col md="2"><img className="title_image" src={require('../Assets/track_healthcare.png')}></img></Col>
									<Col md="10"
									><h3 className="trackHeader-health">HEALTHCARE</h3>
									The Fintech track is for hackers interested in the market and marketplace. Create a tool to help people make better financial decisions, or make a new algorithm to dominate the stock markets. Or finally figure out what “blockchain” is and what you can do with it. If you have a background in finance, work with an engineer and tackle an interesting problem together!
									</Col>
								</Row>
								<Row>
									<Col md="2"><img className="title_image" src={require('../Assets/track_maker.png')}></img></Col>
									<Col md="10">
									<h3 className="trackHeader-maker">MAKER</h3>
									The Maker track enables hackers to unleash their inner maker. Invent something new, or just tinker with a thing to make it do something different. The only requirement is that you Did It Yourself--with your team of 4, of course.
									</Col>
								</Row>
							</Col>
							<Col md="2"></Col>
						</Row>
					</section>
      	</div>
    	);
  	}

}

export default Tracks;
