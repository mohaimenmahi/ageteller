import React, { Component } from 'react';
import partyPopper from './assets/party-popper.jpg';

class AgeStats extends Component {
  timeSince(date) {
    let today = new Date().getTime();
    let other_day = new Date(date).getTime();
    let diff = Math.abs(today - other_day);

    let days = Math.floor(diff / (1000*3600*24));
    let years = Math.floor(days / 365);
    days -= years*365;

    let months = Math.floor(days / 31);
    days -= months*31;

    return `${years} years, ${months} months, ${days} days.`;
  }
  render(){
    return(
      <div>
        <h3>{this.timeSince(this.props.date)}</h3>
        <img className="party-popper" src={partyPopper} alt="party-popper" />
      </div>
    );
  }
}

export default AgeStats;
