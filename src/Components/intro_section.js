import React, { Component } from 'react';
import Button from './Button.js'
import '../Assets/Intro_Section.css';
import Hackry from 'hackry';


import Logo from './Logo.js'

class Intro_Section extends Component {

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
							<Button
	              title='Register'
	              externalLink='https://dashboard.hackry.io/register?hackathonId=NQZBtoIMDJ'
	              color='red' />
							<br/>
							<Button
								title="Mentor"
								externalLink='https://docs.google.com/forms/d/e/1FAIpQLScLpa8-3m0-k6wN4Rz4xmail7i5g79SIfuQ6JrutJybYGIGsg/viewform?usp=sf_link'
								color="darkBlue"
							/>

						</div>
					</div>
      	</div>
    	);
  	}

}

export default Intro_Section;
