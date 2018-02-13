import React, { Component } from 'react';
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
						<div className="cont">
							<div className="header">
								<h2 className="faq_header">FAQs</h2>
							</div>
							<div className="content">
								{(this.props.faqs || []).map((faq, index) => {
									return (
										<Faq_component
											key={index}
											title={faq.question}
											paragraph={faq.answer}
										/>
									)
								})}
							</div>
						</div>
					</section>
      	</div>
    	);
  	}

}

export default Faq;
