import Event from './Event';
import React from 'react';
import '../Assets/stylesheets/schedule.css';

export default class Schedule extends React.Component {

  render() {
    return (
      <div className='schedule'>
        <div className='container'>
          <div className='header'>Schedule</div>
          {(this.props.events || []).map(event => {
            return (
              <Event
               key={event.id}
               name={event.name}
               startDate={event.startDateFormatted.substring(3)}
               endDate={event.endDateFormatted.substring(3)}
               location={event.location}
               description={event.description} />
            )
          })}
        </div>
      </div>
    )

  }

};
