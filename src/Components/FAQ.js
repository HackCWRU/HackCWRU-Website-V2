import React from 'react';
import '../Assets/stylesheets/faqs.css';

class FAQ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='faq'>
        <div className='question'>
          {this.props.question}
        </div>
        <div className='answer'>
          {this.props.answer}
        </div>
      </div>
    );
  }
}


export default FAQ;
