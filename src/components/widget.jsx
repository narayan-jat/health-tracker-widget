import React from 'react';
import './widget.css';
import ActivityCard from './card';
import { FaEdit } from 'react-icons/fa'; // Import the pencil icon

function Widget() {
  return (
    <div className="app-container">
      <h1>🩺 Activities: Past 24 hrs</h1>
      <div className="outer-card">
        <div className="card-header">
          <h2>Activities</h2>
          <div className="edit-icon" style={{ fontSize: '24px' }}>
            <FaEdit />
          </div>
        </div>
        <div className="card-container">
          <ActivityCard title="Sleep" value="10 hr 35 mins" />
          <ActivityCard title="Sitting" value="12 hr 35 mins" timer="1hr" />
          <ActivityCard title="Steps" value="1000" target="7000" />
          <ActivityCard
            title="Water"
            value="Today: 1.5 ltrs"
            timer="30mins"
            target="3 ltrs"
          />
          <ActivityCard title="Running" value="5 Kms in 25 mins" />
          <ActivityCard
            title="Exercise"
            value="Calories burn: 500 cal"
            target="1000 cal"
          />
        </div>
      </div>
    </div>
  );
}

export default Widget;
