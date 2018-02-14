import Event from './Event';
import React from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';
import {goToAnchor} from 'react-scrollable-anchor';

import '../Assets/stylesheets/schedule.css';

export default class Schedule extends React.Component {

  groupedEvents() {
    const grouped = {};

    (this.props.events || []).forEach(event => {
      const date = event.startDateFormatted.substring(0, 2)
      let dayOfWeek;

      if (date == '16') {
        dayOfWeek = 'Friday'
      } else if (date == '17') {
        dayOfWeek = 'Saturday'
      } else if (date == '18') {
        dayOfWeek = 'Sunday'
      }

      if (dayOfWeek) {
        if (grouped[dayOfWeek]) {
          grouped[dayOfWeek].push(event)
        } else {
          grouped[dayOfWeek] = [event];
        }
      }
    });

    return grouped;
  }

  render() {
    const groupedEvents = this.groupedEvents();
    const days = Object.keys(groupedEvents);

    const colors = {
      Friday: '#FFF079',
      Saturday: '#8EEDFF',
      Sunday: '#FF7082'
    };

    return (
      <div className='schedule'>
        <div className='container'>
          <ScrollableAnchor id={'schedule'}>
            <div className='header'>Schedule</div>
          </ScrollableAnchor>
          {days.map(dayOfWeek => {
            return (
              <div key={dayOfWeek}>
                <div className='dayOfWeek' style={{ color: colors[dayOfWeek] }}>
                  {dayOfWeek}
                </div>
                <div>
                  {groupedEvents[dayOfWeek].map(event => {
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
          })}
        </div>
      </div>
    )

  }

};
