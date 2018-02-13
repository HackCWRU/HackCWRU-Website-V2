import React from 'react';
import '../Assets/stylesheets/schedule.css';

export default class Event extends React.Component {

  time() {
    return `${this.props.startDate} - ${this.props.endDate}`;
  }

  render() {
    return (
      <div className='event'>
        <div className='title'>
          <div className='name'>
            {this.props.name}
          </div>
          <div>
            <span className='time'>
              {this.time()}
            </span>
            {this.props.location &&
                <i>{this.props.location}</i>}
          </div>
        </div>
        {this.props.description &&
          <div>
            {this.props.description}
          </div>}
      </div>
    )

  }

};
