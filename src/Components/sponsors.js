import React, { Component } from 'react';
import { Button, Row, Col, Panel } from 'react-bootstrap';
import '../Assets/sponsors.css';

class Sponsors extends Component {

	constructor(props) {
		super(props);
	}

	render() {
    	return (
				<div className="App">
					<section className="sSection">
						<div className="SHeader">
							<h2 className="sHeader">A Special Thanks To...</h2>
						</div>
						<div className="sBody">
							<div className="t12">
								<a href="https://www.key.com/personal/index.jsp" target="_blank"><img className="coLo KeyBank" src={require('../Assets/companyLogo/KeyBank_logo.svg')}></img></a>
							</div>
							<div className="t1">
								<a href="https://www.rockwellautomation.com/" target="_blank"><img className="coLo rockwell" src={require('../Assets/companyLogo/rockwell.svg')}></img></a>

							</div>
							<div className="t2">
								<a href="https://www.tek.com/" target="_blank"><img className="coLo Tektronix" src={require('../Assets/companyLogo/Keithley.svg')}></img></a>
								<a href="https://www.embeddedplanet.com/" target="_blank"><img className="coLo EP" src={require('../Assets/companyLogo/embeddedPlanet.svg')}></img></a>
									{/*
										<h2>JP Morgan and Chase</h2>
									*/}
							</div>
							<div className="t3">
								<a href="https://www.etsy.com/" target="_blank"><img className="coLo ETSY" src={require('../Assets/companyLogo/etsy.svg')}></img></a>
								<a href="https://www.mrisoftware.com/" target="_blank"><img className="coLo MRI" src={require('../Assets/companyLogo/MRI.png')}></img></a>
								<a href="http://www.lincolnelectric.com/" target="_blank"><img className="coLo LI" src={require('../Assets/companyLogo/lincolnElectric.png')}></img></a>
							{/*<h3>IBM</h3>
								<h3>P&G</h3> */}
							</div>
							<div className="t4">
								<a href="https://www.covermymeds.com/main/" target="_blank"><img className="coLo CoverMyMeds" src={require('../Assets/companyLogo/CoverMyMeds.svg')}></img></a>
								<a href="https://www.hyland.com/" target="_blank"><img className="coLo Hyland" src={require('../Assets/companyLogo/hyland.png')}></img></a>
								<a href="https://nottinghamspirk.com" target="_blank"><img className="coLo NS" src={require('../Assets/companyLogo/NS.svg')}></img></a>
							</div>
							<div className="t5">
								<a href="https://www.linode.com/" target="_blank"><img className="coLo Linode" src={require('../Assets/companyLogo/linode.svg')}></img></a>
								<a href="http://pandata.co/" target="_blank"><img className="coLo Pandata" src={require('../Assets/companyLogo/pandata.png')}></img></a>
								<a href="http://plugandplaytechcenter.com/" target="_blank"><img className="coLo PNP" src={require('../Assets/companyLogo/PNP.svg')}></img></a>
								{/*<h5>Assurant Labs</h5>*/}
								<a href="https://www.jumpstartinc.org/" target="_blank"><img className="coLo JumpStart" src={require('../Assets/companyLogo/jumpstart.png')}></img></a>
							</div>
							<div className="t6">
								<a href="http://www.bawls.com/" target="_blank"><img className="coLo BAWLS" src={require('../Assets/companyLogo/bawls.png')}></img></a>
								<a href="https://ultrapress.com" target="_blank"><img className="coLo UltraPress" src={require('../Assets/companyLogo/ultrapress.png')}></img></a>
								<a href="https://www.stickermule.com/uses/laptop-stickers?utm_source=hackathon&utm_campaign=hackathon-sponsorship&utm_medium=referral" target="_blank"><img className="coLo stickerMule" src={require('../Assets/companyLogo/stickerMule.svg')}></img></a>
							</div>
						</div>
					</section>
				</div>
    	);
  	}

}

export default Sponsors;
