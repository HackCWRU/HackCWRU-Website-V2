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
					<section className="whatHackCWRU">
						<Row>
							<Col md="2"></Col>
							<Col md="8"><h2 className="whatHeader">Tracks</h2></Col>
							<Col md="2"></Col>
						</Row>
						<Row>
							<Col md="3"></Col>
							<Col md="7">
								<Row>
									<Col md="1"></Col>
									<Col md="11"><h3></h3></Col>
								</Row>
								<Row>
									<Col md="1"></Col>
									<Col md="11"><h3></h3></Col>
								</Row>
								<Row>
									<Col md="1"></Col>
									<Col md="11"><h3></h3></Col>
								</Row>
								<Row>
									<Col md="1"></Col>
									<Col md="11"><h3></h3></Col>
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
