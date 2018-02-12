import React from 'react';

export default class Event extends React.Component {

  time() {
    return `${this.props.startDate} - ${this.props.endDate}`;
  }

  render() {
    return (
      <div>
        <div>
          <div>
            {this.props.name}
          </div>
          <div>
            {this.time()}
          </div>
        </div>
        {this.props.location &&
          <div>
            {this.props.location}
          </div>}
        {this.props.description &&
          <div>
            {this.props.description}
          </div>}
      </div>
    )

  }

};
