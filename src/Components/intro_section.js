import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
						<div className="logoContainer">
							<Logo
							/>
						</div>
						<div className="introText" >
							<img className="title_image" src={require('../Assets/hackCWRU_Title.png')}></img>
							<h3 className="university">Case Western<br></br> Reserve University</h3>
							<h3>February 16-18, 2018</h3>
							<Button bsSize="large" >Register</Button>
						</div>
					</div>
      	</div>
    	);
  	}

}

export default Intro_Section;
