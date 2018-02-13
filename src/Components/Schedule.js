import Event from './Event';
import React from 'react';
import '../Assets/schedule.css';

export default class Schedule extends React.Component {

  render() {
    return (
      <div className='App'>
        <section className='schedule'>
          <div className='title'>
            Schedule
          </div>
          {(this.props.events || []).map(event => {
            return (
              <Event
               key={event.id}
               name={event.name}
               startDate={event.startDateFormatted}
               endDate={event.endDateFormatted}
               location={event.location}
               description={event.description} />
            )
          })}
        </section>
      </div>
    )

  }

};