import React, { Component } from 'react';

class Schedule extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="darkTitle">Schedule</h3>
        <div className="scheduleContainer">
            <div className="dayContainer leftDay">
                <h4>Saturday</h4>
                <h5>12AM <span className="dayText"> Start of Hacking </span></h5>
                <h5>1AM <span className="dayText"> Something </span></h5>
                <h5>3AM <span className="dayText"> Something </span></h5>
                <h5>6AM <span className="dayText"> Something </span></h5>
                <h5>8AM <span className="dayText"> Something </span></h5>
            </div>
            <div className="dayContainer rightDay">
                <h4>Sunday</h4>
                <h5>12AM <span className="dayText"> Something </span></h5>
                <h5>6AM <span className="dayText"> Something </span></h5>
                <h5>8AM <span className="dayText"> Something </span></h5>
                <h5>12PM <span className="dayText"> End of Hacking </span></h5>
                <h5>4PM <span className="dayText"> Judging </span></h5>
            </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
