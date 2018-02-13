import React from 'react';
import Faq_component from './faq_component';
import '../Assets/stylesheets/faqs.css';


class FAQs extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
    	return (
      	<div className="faqs">
        	<div className="container">
						<div className="header">FAQs</div>
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
      	</div>
    	);
  	}

}

export default FAQs;
