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
							<div className="t1">
								<img className="rockwell" src={require('../Assets/companyLogo/rockwell.svg')}></img>
							</div>
							{/*<div className="t2">
								<h2>EP</h2>
								<h2>JP Morgan and Chase</h2>
							</div>*/}
							<div className="t3">
								<img className="ETSY" src={require('../Assets/companyLogo/etsy.svg')}></img>
								{/*<h3>IBM</h3>
								<h3>Lincoln Electric</h3>
								<h3>MRI Software</h3>
								<h3>P&G</h3> */}
							</div>
							<div className="t4">
								<img className="CoverMyMeds" src={require('../Assets/companyLogo/CoverMyMeds.svg')}></img>
								<img className="Hyland" src={require('../Assets/companyLogo/hyland.png')}></img>
								<img className="NS" src={require('../Assets/companyLogo/NS.svg')}></img>
							</div>
							<div className="t5">
								<img className="Linode" src={require('../Assets/companyLogo/linode.svg')}></img>
								<img className="Pandata" src={require('../Assets/companyLogo/pandata.png')}></img>
								{/*<h5>Assurant Labs</h5>
								<h5>Plug and Play Ventures</h5>*/}
								<img className="JumpStart" src={require('../Assets/companyLogo/jumpstart.png')}></img>
							</div>
							<div className="t6">
								<img className="BAWLS" src={require('../Assets/companyLogo/bawls.png')}></img>
								{/*<h6>Ultrapress</h6>*/}
								<img className="stickerMule" src={require('../Assets/companyLogo/stickerMule.svg')}></img>
							</div>
						</div>
					</section>
				</div>
    	);
  	}

}

export default Sponsors;
