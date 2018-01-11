import React, { Component } from 'react';
import { Button, Row, Col, Panel } from 'react-bootstrap';
import Faq_component from './faq_component';
import '../Assets/faq.css';


class Faq extends Component {

	constructor(props) {
		super(props);
	}

	render() {
    	return (
      	<div className="App">
        	<section className="faq">
						<Row>
							<Col md="2"><img className="thing2" src={require('../Assets/thing2.png')}></img></Col>
							<Col md="8"><h2 className="faq_header">FAQs</h2></Col>
							<Col md="2"><img className="thing3" src={require('../Assets/thing3.png')}></img></Col>
						</Row>
						<Row>
							<Col md="2"></Col>
							<Col md="8">
								<Row>
									<Faq_component
										title='Who can attend?'
										paragraph='suppppppp'
									/>
								</Row>
								<br></br>
								<Row>
									<Faq_component
										title='What if I have no experience?'
										paragraph='suppppppp'
									/>
								</Row>
								<br></br>
								<Row>
									<Faq_component
										title='What if I have no team or idea?'
										paragraph='suppppppp'
									/>
								</Row>
								<br></br>
								<Row>
									<Faq_component
										title='Will travel be reimbursed?'
										paragraph='suppppppp'
									/>
								</Row>
								<br></br>
								<Row>
									<Faq_component
										title='How much $$$$$ I need?'
										paragraph='suppppppp'
									/>
								</Row>
								<br></br>
								<Row>
									<Faq_component
										title='What bring doe?'
										paragraph='suppppppp'
									/>
								</Row>
								<br></br>
								<Row>
									<Faq_component
										title='What if I has no toys to play with?'
										paragraph='suppppppp'
									/>
								</Row>

							</Col>
							<Col md="2"></Col>
						</Row>
					</section>
      	</div>
    	);
  	}

}

export default Faq;
