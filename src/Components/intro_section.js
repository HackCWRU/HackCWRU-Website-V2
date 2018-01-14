import React, { Component } from 'react';
import { Button, Row, Col, Panel, Grid } from 'react-bootstrap';
import '../Assets/Intro_Section.css';

import Logo from './Logo.js'

class Intro_Section extends Component {

	constructor(props) {
		super(props);
	}

	render() {
    	return (
      	<div className="Intro_Section">
					<div className="center_row">
	          	<Row>
								<Col md ={5}>
									<Logo
										className="logo"
										animation_cycle = {'0'}
									/>
								</Col>
								<Col className="introText" md={7} >
									<h1><img className="title_image" src={require('../Assets/hackCWRU_Title.png')}></img></h1>
									<h3 className="university">Case Western<br></br> Reserve University</h3>
									<h3>February 16-18, 2018</h3>
									<div className="butSty"><Button bsSize="large" block >Register</Button></div>
								</Col>
							</Row>
					</div>
      	</div>
    	);
  	}

}

export default Intro_Section;
