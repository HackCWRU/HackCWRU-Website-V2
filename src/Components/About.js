import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {goToAnchor} from 'react-scrollable-anchor';

import '../Assets/stylesheets/about.css';

const About = () => {
	return (
		<div className='about'>
			<div className='container'>
				<ScrollableAnchor id={'about'}>
					<div className='header'>What is HackCWRU?</div>
				</ScrollableAnchor>
				<div className='description'>
				hackCWRU brings together the brightest and most creative students to promote unrestricted technological innovation.
				<br></br><br></br>Hosted at Case Western Reserve University, over 350 students will spend 36 hours bringing their imagination into the real world. Attendees will work with peers and mentors to create projects in one of four project tracks.
				<br></br><br></br>Don't be intimidated, however. You don't have to know what you're doing to attend. If you are new to hackathons, we look forward to introducing you to a world of creation. Lastly, at hackCWRU we abide by and enforce MLH's Code of Conduct.
				</div>
			</div>
		</div>
	);
}

export default About;
