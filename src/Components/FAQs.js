import React from 'react';
import FAQ from './FAQ';
import ScrollableAnchor from 'react-scrollable-anchor';
import {goToAnchor} from 'react-scrollable-anchor';
import '../Assets/stylesheets/faqs.css';


class FAQs extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
    	return (
      	<div className="faqs">
        	<div className="container">
						<ScrollableAnchor id={'faq'}>
							<div className="header">FAQs</div>
						</ScrollableAnchor>
						<div>
							{(this.props.faqs || []).map((faq, index) => {
								return (
									<FAQ
										key={index}
										question={faq.question}
										answer={faq.answer}
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
