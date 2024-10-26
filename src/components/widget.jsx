import React from "react";
import "./widget.css";
import ActivityCard from "./card";
import { useNavigate } from "react-router-dom";
import { generateRandom } from "./RandomDataGenerator";

function Widget() {
  const navigate = useNavigate();
  const data = [
    { title: "Sleep", value: generateRandom(300, 600) },
    { title: "Sitting", value: generateRandom(6 * 60, 12 * 60) },
    { title: "Steps", value: generateRandom(2000, 10000) },
    { title: "Water", value: generateRandom(2000, 6000) },
    { title: "Running", value: generateRandom(3000, 5000) },
    { title: "Exercise", value: generateRandom(400, 2000) },
  ];

  return (
    <div className="app-container">
      <div className="outer-card">
        <div className="card-header">
          <div className="center-item">
            <h3>Activities: Past 24 hrs</h3>
          </div>
        </div>
        <div className="card-container">
          <ActivityCard
            className="cards"
            title="Sleep"
            value={`${Math.floor(data[0].value / 60)} hr ${
              data[0].value % 60
            } mins`}
            done={Math.floor(data[0].value / 10)}
            handleClick={() => navigate("/health-tracker-widget/sleepplots")}
          />
          <ActivityCard
            className="cards"
            title="Sitting"
            value={`${Math.floor(data[1].value / 60)} hr ${
              data[1].value % 60
            } mins`}
            timer="1hr"
            done={(data[1].value / 720) * 80}
            handleClick={() => navigate("/health-tracker-widget/sittingplots")}
          />
          <ActivityCard
            className="cards"
            title="Steps"
            value={data[2].value}
            target="10000"
            done={(data[2].value / 10000) * 80}
            handleClick={() => navigate("/health-tracker-widget/stepsplots")}
          />
          <ActivityCard
            title="Water"
            value={`${Math.floor(data[3].value / 1000)} Ltr ${
              data[3].value % 1000
            } ML`}
            timer="30mins"
            target="6 ltrs"
            done={(data[3].value / 6000) * 80}
            handleClick={() => navigate("/health-tracker-widget/waterplots")}
          />
          <ActivityCard
            className="cards"
            title="Running"
            value={`${Math.floor(data[4].value / 1000)} km ${
              data[4].value % 1000
            } m`}
            done={(data[4].value / 5000) * 70}
            handleClick={() => navigate("/health-tracker-widget/runningplots")}
          />
          <ActivityCard
            className="cards"
            title="Exercise"
            value={`${data[5].value} cal`}
            target="2000 cal"
            done={(data[5].value / 2000) * 80}
            handleClick={() => navigate("/health-tracker-widget/exerciseplots")}
          />
        </div>
      </div>
    </div>
  );
}

export default Widget;
