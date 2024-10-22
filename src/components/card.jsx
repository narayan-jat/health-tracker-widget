import React from 'react';
import './card.css';

function ActivityCard({title, value, timer, target}) {
  return (
    <div className="card">
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{value}</p>
      </div>
      <div className="timer">
        {timer && <p>Timer: {timer}</p>}
      </div>
      <div className="target">
        {target && <p>Target: {target}</p>}
      </div>
    </div>
  );
}

export default ActivityCard;
