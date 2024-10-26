import React from "react";
import "./card.css";

function ActivityCard({ title, value, handleClick, target, done }) {
  return (
    <div className="card" onClick={handleClick}>
      <div
        className={`progress ${title.toLowerCase()}`}
        style={{ height: `${done}%` }}
      ></div>

      <div className="content">
        <div className="small-card-header">
          <div className="left-item">
            <h4>{title}</h4>
          </div>
          <div className="target">{target && <p>Target: {target}</p>}</div>
        </div>
        <div className="card-value">
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
