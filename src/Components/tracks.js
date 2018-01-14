import React, { Component } from 'react';
import '../Assets/tracks.css';


class Tracks extends Component {

	constructor(props) {
		super(props);
	}

	render() {
    	return (
				<div className="App">
					<section className="trackSection">
						<div className="Trackheader">
							<h2 className="trackHeader">Tracks</h2>
						</div>
						<div className="bodyTextTrack">

							<div className="track">
								<div className="trackImageContainer">
									<img className="title_image" src={require('../Assets/track_fin1.png')}></img>
								</div>
								<div className="trackTextContainer">
									<h3 className="trackHeader fin">FINANCE</h3>
									<p className="trackText">The Civic track looks at the all levels of connected devices, from local IoT networks to municipal systems and civic datasets. Create a new device for your smart home, or create something that benefits the community.</p>
								</div>
							</div>

							<div className="track">
								<div className="trackImageContainer">
									<img className="title_image" src={require('../Assets/track_fin1.png')}></img>
								</div>
								<div className="trackTextContainer">
									<h3 className="trackHeader fin">FINANCE</h3>
										<p className="trackText">The Civic track looks at the all levels of connected devices, from local IoT networks to municipal systems and civic datasets. Create a new device for your smart home, or create something that benefits the community.</p>
								</div>
							</div>

							<div className="track">
								<div className="trackImageContainer">
									<img className="title_image" src={require('../Assets/track_fin1.png')}></img>
								</div>
								<div className="trackTextContainer">
									<h3 className="trackHeader fin">FINANCE</h3>
										<p className="trackText">The Civic track looks at the all levels of connected devices, from local IoT networks to municipal systems and civic datasets. Create a new device for your smart home, or create something that benefits the community.</p>
								</div>
							</div>

							<div className="track">
								<div className="trackImageContainer">
									<img className="title_image" src={require('../Assets/track_fin1.png')}></img>
								</div>
								<div className="trackTextContainer">
									<h3 className="trackHeader fin">FINANCE</h3>
										<p className="trackText">The Civic track looks at the all levels of connected devices, from local IoT networks to municipal systems and civic datasets. Create a new device for your smart home, or create something that benefits the community.</p>
								</div>
							</div>
						</div>
					</section>
      	</div>
    	);
  	}

}

export default Tracks;
