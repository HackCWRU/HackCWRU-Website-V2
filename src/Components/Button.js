import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../Assets/Button.css';

class Button extends Component {

  renderButton() {
    return (
      <div>
        <button className={this.props.color}>
          {this.props.title}
        </button>
      </div>
    )
  }

  render() {
    const { externalLink } = this.props;

    return (
      <div>
        {externalLink ? <a target="_blank" href={externalLink}>
          {this.renderButton()}
        </a> : this.renderButton()}
      </div>
    );
  }

}

Button.propTypes = {
  title: PropTypes.string,
  externalLink: PropTypes.string,
  color: PropTypes.oneOf(['red', 'darkBlue'])
};

export default Button;
